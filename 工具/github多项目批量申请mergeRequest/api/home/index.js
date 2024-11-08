import request from "../axios.js";

export function getProjects (params) {
    return request({
        url: "/api/v4/projects",
        method: "get",
        params
    });
}
export function mergeRequests (projectId, data) {
    return request({
        url: `/api/v4/projects/${projectId}/merge_requests`,
        method: "post",
        data
    });
}
export function getBannerCommits (projectId, params) {
    return request({
        url: `/api/v4/projects/${projectId}/repository/commits`,
        method: "get",
        params
    });
}
export function getMergeRequests (projectId) {
    return request({
        url: `/api/v4/projects/${projectId}/merge_requests`,
        method: "get",
        params: { state: 'opened', }
    });
}


export function getCreatedBanner (projectId, data) {
    return request({
        url: `/api/v4/projects/${projectId}/repository/branches`,
        method: "post",
        data
    });
}

