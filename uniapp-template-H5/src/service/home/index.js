import http from '../http/index'

export const getHomeInfo = function(data = {}) {
	return http.request({
		url: '/goods/home',
		data
	})
}
