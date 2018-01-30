import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home')
const ProductDetail = () => import('@/components/ProductDetail')
const Payment = () => import('@/components/Payment')
const PaymentSuccess = () => import('@/components/PaymentSuccess')
const TakeGoods = () => import('@/components/TakeGoods')
const TakeGoodsSuccess = () => import('@/components/TakeGoodsSuccess')

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
      path: '/paymentsuccess',
      name: 'PaymentSuccess',
      component: PaymentSuccess,
      meta: {
        keepAlive: false,
        title: ''
      },
    },
    {
      path: '/takegoods',
      name: 'TakeGoods',
      component: TakeGoods,
      meta: {
        keepAlive: false,
        title: '提货'
      },
    },
    {
      path: '/takegoodssuccess',
      name: 'TakeGoodsSuccess',
      component: TakeGoodsSuccess,
      meta: {
        keepAlive: false,
        title: '提货'
      },
    },
    {
      path: '/',
      redirect: '/home'
    },
  ]
})
