import { readFile, writeFile } from './utils/index.js';
import { getProjects, mergeRequests, getBannerCommits } from './api/index.js';

const xlsxData = readFile('./快速生成mergeRequest合并.xlsx')
// 获取项目id
const projectsData = await Promise.allSettled(xlsxData.map(item => getProjects({ search: item.name })))
// 写入数据
projectsData.forEach((result, index) => {
    if (result.status === 'fulfilled') {
        const data = result.value[0]
        data.name === xlsxData[index].name ? xlsxData[index].id = data.id : xlsxData[index].id = 'none'
        console.log(`${xlsxData[index].name}-----success`)
    } else if (result.status === 'rejected') {
        console.log(`${xlsxData[index].name}-----fail`)
        throw new Error(xlsxData[index].name + '获取项目数据失败')
    }
})
console.log('------获取项目成功------')
// 获取项目分支信息
const bannerData = await Promise.allSettled(xlsxData.map(item => item.id !== 'none' ? getBannerCommits(item.id, { ref_name: item.source_branch }) : Promise.reject([{ id: 'none', title: '无参数', message: '无参数', }])))
// 写入数据
bannerData.forEach((result, index) => {
    if (result.status === 'fulfilled') {
        const data = result.value[0]
        xlsxData[index].title = data.title
        xlsxData[index].message = data.message
        console.log(`${xlsxData[index].name}-----success`)
    } else if (result.status === 'rejected') {
        console.log(`${xlsxData[index].name}-----fail`)
        throw new Error(xlsxData[index].name + '获取分支数据失败')
    }
})
console.log('------获取合并信息成功------')
// 创建merage
const mergeRequestsStatus = await Promise.allSettled(xlsxData.map(item => {
    return item.id !== 'none' ? mergeRequests(item.id, {
        source_branch: item.source_branch,
        target_branch: item.target_branch,
        title: item.title,
        description: item.message
    }) : Promise.reject({ reason: '无项目id' })
}



))
// 写入数据
mergeRequestsStatus.forEach((result, index) => {
    if (result.status === 'fulfilled') {
        console.log(`${xlsxData[index].name}-----success`)
        xlsxData[index].merge_url = result.value.web_url
    } else if (result.status === 'rejected') {
        console.log(`${xlsxData[index].name}-----fail`)
        xlsxData[index].merge_url = JSON.stringify(result.reason)
    }
})
console.log('------创建合并Merge Request成功------')
writeFile(xlsxData)