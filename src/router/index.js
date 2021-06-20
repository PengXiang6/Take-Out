import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '../components/Goods.vue'
import rating from '../components/rating.vue'
import seller from '../components/seller.vue'
Vue.use(VueRouter)

const routes = [
  
  {
    path:'/',
    redirect:'/goods'
  },
  {
    path: '/goods',
    name: 'goods',
    component: Goods
  },
  {
    path: '/rating',
    name: 'rating',
    component: rating
  },
  {
    path: '/seller',
    name: 'seller',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: seller
  },
 
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'active',
 
})

export default router
