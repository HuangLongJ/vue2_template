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
// ref_name=tapd_1033812_copywrite
export function getBannerCommits (projectId, params) {
    return request({
        url: `/api/v4/projects/${projectId}/repository/commits`,
        method: "get",
        params
    });
}

// /api/v4/projects/${projectId}/merge_requests
