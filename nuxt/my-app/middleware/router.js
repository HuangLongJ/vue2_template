export default ({ store, route, redirect, params, query, req, res }) => {
  // 全局路由守卫
  const lang = ['en']
  if (params.lang && !lang.includes(params.lang)) {
    redirect('/en/')
  }
}
