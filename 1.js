// var value = 100;
// function fn () {
//     console.log(this)
//     this.value++
//     return this.value
// }
// var obj = {
//     value: 1,
//     fn
// }

// function delay (fn, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(fn())
//         }, delay)
//     })
// }
// async function run () {
//     var value = 100;
//     try {
//         const pms1 = delay(fn, 100)
//         const pms2 = delay(obj.fn, 200)
//         const value1 = await pms1
//         const value2 = await pms2
//         const value3 = await delay(fn.bind(obj), 300)
//         console.log(value1)
//         console.log(value2)
//         console.log(value3)
//     } catch (error) {
//         console.log(error)
//     }
// }
// run()

let rotationAngle = 0;
let start = 0
let end = 0
document.querySelector('.btn').addEventListener('click', function () {
	const element = document.querySelector('.box');
	rotationAngle += 70
	element.style.transform = `rotate(${rotationAngle}deg)`;
})
