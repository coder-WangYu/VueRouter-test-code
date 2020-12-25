import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/home.vue"

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/article',
      component: () => import("../components/articles.vue"),
    },
    {
      path: '/about',
      component: () => import("../components/about.vue")
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
      name: 'new',
      component: () => import("../components/new.vue")
    },
  ],
})