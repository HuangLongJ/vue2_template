import axios from 'axios'

const DEV = 'DEV'
const STAGING = 'STAGING'
const LIVE = 'LIVE'
const AGL_UAT = 'AGL_UAT'
const AGL_LIVE = 'AGL_LIVE'
const WANDA_UAT = 'WANDA_UAT'


const envDict = {
  [DEV]: {
    envName: 'dev',
    cloudId: 3
  },
  [STAGING]: {
    envName: 'stage',
    cloudId: 1
  },
  [LIVE]: {
    envName: 'live',
    cloudId: 1
  },
  [AGL_UAT]: {
    envName: 'live',
    cloudId: 8
  },
  [AGL_LIVE]: {
    envName: 'live',
    cloudId: 6
  },
  [WANDA_UAT]: {
    envName: 'live',
    cloudId: 9
  }
}

async function getManageApprover (projectName) {
  let { data } = await req('http://ops.jingdev.com/api/v1/cicd/approver?category=manage')
  return data[0].username
}

// 项目id
async function getProjectIdByProjectName (projectName) {
  let { data } = await req(`http://ops.jingdev.com/api/v1/cicd/application?businessId=1&current=1&pageSize=20&application_name=${projectName}`)
  return data[0]?.id
}

async function getNearestTagVersion (id, envName) {
  let { data } = await req(`http://ops.jingdev.com/api/v1/cicd/builds?appId=${id}&isSuccess=true&env=${envName}`)
  return {
    imageName: data[0]?.imageName,
    tagVersion: data[0]?.tagVersion // 版本
  }
}


async function deploy ({ projectName, manageApprover, tapd, envName,
  cloud, }) {
  let id = await getProjectIdByProjectName(projectName)
  let versionConfig = await getNearestTagVersion(id, envName)

  const payload = {
    "application_name": projectName,
    envName,
    "tagVersion": versionConfig.tagVersion,
    "imageName": versionConfig.imageName,
    "publish_type": "story",
    "tapd_id": tapd,
    cloud,
    "testApprover": "MaXueYan",
    "script_exec": "无",
    "sql_exec": "无",
    "ops_exec": "无配置变更",
    "appId": id,
  }
  if (envName === 'live') {
    payload.productApprover = "LiuXiaoYu"
    payload.manageApprover = manageApprover
    payload.opsApprover = "LiuZiWei"
  }
  let data = await req('http://ops.jingdev.com/api/v1/cicd/deploy', 'post', payload)
  if (data.code === 200) {
    return projectName
  } else {
    throw Error(data.msg)
  }
}

function req (url, method = 'get', data) {

  return axios({
    url: url,
    method: method,
    data: data,
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhc2NvcGUiOiIiLCJleHAiOjE3MzM0Njk1NjIsImlkZW50aXR5Ijo0MywibmljZSI6Ikh1YW5nTG9uZ0p1biIsIm9yaWdfaWF0IjoxNzMzMzgzMTYyLCJyb2xlaWQiOjIsInJvbGVrZXkiOiJkZXYiLCJyb2xlbmFtZSI6IuW8gOWPkSJ9.-O_TpylZcgaVSoJicaPUdQUZjsEKCqMw8Ze59UW6D8I'
    },
    timeout: 20 * 1000
  }).then(data => {
    return data.data
  })
}

async function batchDeploy (projectList, envs, tapd) {

  let list = Array.from(new Set(projectList))
  if (!list.length || !envs.length || !tapd) {
    throw Error('projectList, envs, tapd 必填')
  }
  let cloud = []
  let envName = ''

  envs.forEach(env => {
    let envConf = envDict[env]
    if ((envName && envConf.envName) && envName !== envConf.envName) {
      throw Error('只支持同时部署同一个环境')
    }
    if (!envConf) {
      throw Error(`未找到环境配置: ${env}`)
    }
    envName = envConf.envName
    cloud.push(envConf.cloudId)
  })

  if (!envName || !cloud.length) {
    throw Error('未找到环境')
  }
  let manageApprover = await getManageApprover()
  let pmsArr = list.map(projectName => {
    return deploy({
      projectName,
      manageApprover,
      envName,
      cloud,
      tapd

    })
  })
  let results = await Promise.allSettled(pmsArr)
  let sucList = []
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      sucList.push(result.value)
    }
  })

  let errorList = list.filter(item => !sucList.includes(item));
  console.log(`共${list.length}个项目, 成功: ${sucList.length}, 失败${errorList.length} `)
  console.log('失败列表: ', errorList)

}

// 当打包构建
async function build ({ projectName, envName }) {
  let id = await getProjectIdByProjectName(projectName)
  let payload = {
    "application_name": projectName,
    envName,
    "arch": [
      "x86"
    ],
    "appId": id
  }
  let data = await req('http://ops.jingdev.com/api/v1/cicd/builds', 'post', payload)
  if (data.code === 200) {
    return { projectName, id }
  } else {
    throw Error(data.msg)
  }
}
// 获取对应项目的打包状态
async function getBuildStatus (id) {
  let { data } = await req(`http://ops.jingdev.com/api/v1/cicd/builds?appId=${id}&current=1&pageSize=20`)
  return data[0]
}
// 批量获取 项目打包状态
async function bathGetStatus (sucList) {
  let pmsArr = sucList.map(item => {
    return getBuildStatus(item.id)
  })
  let results = await Promise.allSettled(pmsArr)
  let buildingDict = {}
  results.forEach((result, index) => {
    let projectName = sucList[index].projectName
    if (result.status === 'fulfilled') {
      sucList.push(result.value)
      buildingDict[projectName] = result.value.ciStatus
    } else {
      buildingDict[projectName] = 3
      console.log('获取构建状态失败: ', sucList[index].projectName)
    }
  })
  let arr = Object.entries(buildingDict)
  var warnList = arr.filter(item => item[1] !== 0)
  console.log(arr.length - warnList.length, '个应用正在构建中')
  if (warnList.length) {
    console.log('以下应用没有在构建中:')
    console.log(warnList.map(item => item[0]))
  }
}

// 批量打包
async function batchBuild (projectList, envs) {
  let env = envs[0]
  let list = Array.from(new Set(projectList))
  let cloud = []
  let envName = envDict[env].envName
  let pmsArr = list.map(projectName => {
    return build({
      projectName,
      envName
    })
  })
  let results = await Promise.allSettled(pmsArr)
  let sucList = []
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      sucList.push(result.value)
    } else {
      console.log(result)
    }
  })

  let errorList = list.filter(item => !sucList.find(sucVal => sucVal.projectName === item));
  console.log(`共${list.length}个项目, 成功: ${sucList.length}, 失败${errorList.length} `)
  console.log('失败列表: ', errorList)
  if (!sucList.length) return
  let delay = 20
  console.log(`${delay}秒后开始查询构建状态`)
  await new Promise(resolve => setTimeout(resolve, delay * 1000))
  bathGetStatus(sucList)
}

let projectList = [
  // 'jms-mainprogram-microproject-frontend-static',
  // 'jms-workwechat-microproject-frontend-static',
  // 'jms-lead-microproject-frontend-static',
  // 'jms-analytics-microproject-frontend-static',
  // 'jms-websites-frontend-static',
  // 'jms-website-editor-landing-page-frontend-static'
  // 'jms-forms-frontend-static'
  // 'jms-electronicBusinessCard-frontend-static',
  // 'jms-aggregateListPage-frontend-static',
  // 'jms-vip-frontend-static',
  // 'jms-forms-frontend-static'
  // 'jms-edm-microproject-frontend-static'

  // 'webinar-microProject-app', // 【组合CTA交互性优化】 https://www.tapd.cn/57788555/prong/stories/view/1157788555001057136
  // 'seminar-microProject-app',
  // 'link-microProject-app',
  // 'landingPage-microProject-app',
  // 'content-microProject-app',
  // 'survey-microProject-app',

  // 'teamMemberCenter-microProject-app',// 【组合CTA交互性优化】 https://www.tapd.cn/57788555/prong/stories/view/1157788555001057136 【电子名片名片分析页面增加关注公众号指标】 https://www.tapd.cn/57788555/prong/stories/view/1157788555001056974

  // 'fullStaffMarketing-microProject-app',// 【全员营销分享海报样式优化】 https://www.tapd.cn/57788555/prong/stories/view/1157788555001057140
  // 'jms-allMemberMarketing-frontend-static', 

  'userProfile-microProject-app', // 【用户群组列表以及创建交互优化】 https://www.tapd.cn/57788555/prong/stories/view/1157788555001057032
  'dataManagement-microProject-app',
];

/* 
  DEV, STAGING, LIVE, AGL_UAT, AGL_LIVE,WANDA_UAT
*/

let envs = [
  // DEV,
  // STAGING
  LIVE
]

// batchBuild(projectList, envs)

batchDeploy(projectList, envs, '【用户群组列表以及创建交互优化】 https://www.tapd.cn/57788555/prong/stories/view/1157788555001057032')

