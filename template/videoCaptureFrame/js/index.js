const inp = document.querySelector('input[type=file]')
inp.onchange = async (e) => {
    const file = e.target.files.length && e.target.files[0]
    // 等待..
    const arr = []
    for (let i = 0; i < 10; i++) {
        const data = await captureFrame(file, i * 7)
        createPreview(data)
        arr.push(data)
    }
    // 完成
    console.log(arr)
}

// 1. 把视频帧生成本地链接 通过video定格到某一帧
// 2. 把这一帧的图片 用canvas画出来
// 3. canvas 选择图片需要上传 blob 预览 url
function captureFrame (videoFile, time = 0) {
    return new Promise((resolve) => {
        const vdo = document.createElement('video')
        vdo.src = URL.createObjectURL(videoFile)// 上传的视频链接
        vdo.currentTime = time // 定格时间
        vdo.autoplay = true // 自动播放
        vdo.muted = true // 静音 属性能兼容所有浏览器
        // 等video加载完成 画帧图片
        // 当video元素不渲染到页面, 他会定格在一帧上
        vdo.oncanplay = async () => {
            const data = await drawVideo(vdo)
            resolve(data)
        }
    })
}
function drawVideo (vdo) {
    return new Promise((resolve) => {
        const cvs = document.createElement('canvas')
        cvs.width = vdo.videoWidth // 图片宽高
        cvs.height = vdo.videoHeight
        const ctx = cvs.getContext('2d')
        ctx.drawImage(vdo, 0, 0, cvs.width, cvs.height) // canvas 画出来
        // 图片转成 blob 异步
        cvs.toBlob(blob => {
            resolve({
                blob,
                url: URL.createObjectURL(blob)
            })
        })
    })
}
function createPreview (data) {
    const img = document.createElement('img')
    img.src = data.url
    document.body.appendChild(img)
}