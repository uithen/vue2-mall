import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const TheHome = () => import('views/home/TheHome')
const TheCart = () => import('views/cart/TheCart')
const TheProfile = () => import('views/profile/TheProfile')
const TheCategory = () => import('views/category/TheCategory')
const TheDetail = () => import('views/detail/TheDetail')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: TheHome
  },
  {
    path: '/category',
    component: TheCategory
  },
  {
    path: '/cart',
    component: TheCart
  },
  {
    path: '/profile',
    component: TheProfile
  },
  {
    name: 'TheDetail',
    path: '/detail/:iid',
    component: TheDetail
  },
]

const router = new VueRouter({
  routes,
  // mode: 'history'
})

export default router
