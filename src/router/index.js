import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home')
const ProductDetail = () => import('@/components/ProductDetail')
const Payment = () => import('@/components/Payment')

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
        keepAlive: true,
        title: ''
      },
    },
    {
      path: '/productdetail/index/:index',
      name: 'ProductDetail',
      component: ProductDetail,
      meta: {
        keepAlive: false,
        title: '产品详情'
      },
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment,
      meta: {
        keepAlive: false,
        title: ''
      },
    },
    {
      path: '/',
      redirect: '/home'
    },
  ]
})
