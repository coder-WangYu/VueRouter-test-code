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
      meta: {
        requestFlag: false,
      },
    },
    {
      path: '/article',
      component: () => import("../components/articles.vue"),
      meta: {
        requestFlag: true,
      },
    },
    {
      path: '/about',
      component: () => import("../components/about.vue"),
      meta: {
        requestFlag: false,
        leaveFlag: true,
      },
    },
    {
      path: '/hot',
      component: () => import("../components/hot.vue"),
      meta: {
        requestFlag: true,
      },
    },
    {
      path: '/hy',
      component: () => import("../components/hy.vue"),
      redirect: '/hy/jd',
      children: [
        {
          path: 'jd',
          component: () => import("../components/hy/jd.vue"),
          meta: {
            requestFlag: true,
          },
        },
        {
          path: 'sn',
          component: () => import("../components/hy/sn.vue"),
          meta: {
            requestFlag: true,
          },
        },
        {
          path: 'hp',
          component: () => import("../components/hy/hp"),
          meta: {
            requestFlag: true,
          },
        },
      ],
      meta: {
        requestFlag: true,
      },
    },
    {
      path: '/new',
      component: () => import("../components/new.vue"),
      meta: {
        requestFlag: true,
      },
    },
    {
      path: '/news/:id',
      component: () => import("../components/news/news.vue"),
      meta: {
        requestFlag: true,
      },
    },
    {
      path: '/login',
      component: () => import("../components/login.vue")
    },
  ],
})

router.beforeEach((to, from, next) => {
  let haveFlag = to.matched.some(item => item.meta.requestFlag)
  if (haveFlag) {
    document.cookie.includes('=') ? next() : window.confirm("需要登录才能浏览，是否登录？") ? next('/login') : next(false)
  } else {
    next()
  }
})

export default router