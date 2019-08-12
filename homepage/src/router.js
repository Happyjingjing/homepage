import Vue from 'vue'
import Router from 'vue-router'
import myPage from '@/views/myPage'
import homePc from '@/views/homePc'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    // path: '/',
    // redirect: {
    //   name: 'home',
    // }

    // component: home,
    // redirect: '/index',
    // children: [{
    //   path: '/index',
    //   name: 'index',
    //   component: Index
    // }]

    // }, {
    //   path: '/index',
    //   name: 'home',
    //   component: home
    // },
    {
      path: '/',
      redirect: {
        name: 'mypage',
      }
    }, {
      path: '/index',
      name: 'mypage',
      component: myPage
    }, {
      path: '/homepc',
      name: 'homepc',
      component: homePc
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})