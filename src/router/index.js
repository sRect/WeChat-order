import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home')

Vue.use(Router)

export default new Router({
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/',
      redirect: '/home'
    },
  ]
})
