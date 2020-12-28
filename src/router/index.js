import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/home.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        haveName: () => import("../components/haveName.vue"),
        hot: () => import("../components/hot.vue"),
      },
    },
    {
      path: '/article',
      component: () => import("../components/articles.vue"),
    },
    {
      path: '/about',
      component: () => import("../components/about.vue"),
      beforeEnter: (to, from, next) => {
        console.log(to)
        console.log(from)
        next()
      },
      meta: {
        info1: 1,
        info2: true,
        info3: "关于。。。",
      }
    },
    {
      path: '/hot',
      component: () => import("../components/hot.vue"),
    },
    {
      path: '/hy',
      component: () => import("../components/hy.vue"),
      redirect: '/hy/jd',
      children: [
        // {
        //   path: '',
        //   component: () => import("../components/hy/jd.vue"),
        // },
        {
          path: 'jd',
          component: () => import("../components/hy/jd.vue"),
        },
        {
          path: 'sn',
          component: () => import("../components/hy/sn.vue"),
        },
        {
          path: 'hp',
          component: () => import("../components/hy/hp"),
        },
      ]
    },
    {
      path: '/new',
      component: () => import("../components/new.vue"),
    },
    {
      path: '/news/:id',
      component: () => import("../components/news/news.vue"),
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.path == '/article') {
    next('/new')
    alert("我应该是'/article'")
  } else {
    next()
  }
})

export default router

// export default new VueRouter({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       components: {
//         default: Home,
//         haveName: () => import("../components/haveName.vue"),
//       },
//     },
//     {
//       path: '/article',
//       component: () => import("../components/articles.vue"),
//     },
//     {
//       path: '/about',
//       component: () => import("../components/about.vue")
//     },
//     {
//       path: '/hot',
//       component: () => import("../components/hot.vue"),
//     },
//     {
//       path: '/hy',
//       component: () => import("../components/hy.vue"),
//       redirect: '/hy/jd',
//       children: [
//         // {
//         //   path: '',
//         //   component: () => import("../components/hy/jd.vue"),
//         // },
//         {
//           path: 'jd',
//           component: () => import("../components/hy/jd.vue"),
//         },
//         {
//           path: 'sn',
//           component: () => import("../components/hy/sn.vue"),
//         },
//         {
//           path: 'hp',
//           component: () => import("../components/hy/hp"),
//         },
//       ]
//     },
//     {
//       path: '/new',
//       component: () => import("../components/new.vue"),
//     },
//     {
//       path: '/news/:id',
//       component: () => import("../components/news/news.vue"),
//     },
//   ],
// })