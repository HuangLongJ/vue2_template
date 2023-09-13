import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// const views = require.context("@/views", true, /\.vue$/);

// function generateRoutes(views) {
//   const Arr = [];
//   views.keys().forEach((key) => {
//     const arr = key.split("/");
//     const arr1 = key.match(/^\.\/(.+)\/(.+)\.vue$/);
//     if (arr.length === 2) {
//       Arr.push(key);
//     }
//     if (arr.length === 3) {
//       if (arr1[1] === arr1[2] || arr1[2] === "index") {
//         Arr.push(key);
//       }
//     }
//   });

//   return pathToRouter(Arr);
// }

// function pathToRouter(data) {
//   return data.map((path) => {
//     return {
//       name: path.replace(/^\.\/(.+)\.vue$/, "$1").replace(/\//g, "_"),
//       path: path.replace(/^\.\//, "/").replace(/\.vue$/, ""),
//       component: views(path)?.default || {},
//       meta: views(path)?.default?.meta || {},
//       children: [],
//     };
//   });
// }
// const routes = generateRoutes(views);
// routes.forEach((item) => {
//   if (item.path === "/home") {
//     const parent = routes.filter((e) => e.path !== "/home");
//     item.children.push(...parent);
//   }
// });
// routes.filter((e) => e.path === "/home"),
import home from "@/views/home.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    // children: [
    //   {
    //     path: "/form",
    //     name: "form",
    //     component: () => import("@/views/formComponents/index.vue"),
    //   },
    // ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
