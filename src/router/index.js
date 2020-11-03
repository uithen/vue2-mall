import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
const Category = () => import('views/category/Category')
const GoodsDetail = () => import('views/goodsDetail/GoodsDetail')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/goodsDetail/:iid',
    component: GoodsDetail
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
