import Vue from 'vue'
import VueRouter from 'vue-router'

const Cart = () => import('view/cart/cart')
const Category = () => import('view/category/category')
const Profile = () => import('view/profile/profile')
const Home = () => import('view/home/home')
const Detail =() => import('view/detail/Detail')

Vue.use(VueRouter)
const routes =  [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
