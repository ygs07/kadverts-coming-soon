import Vue from 'vue'
import VueRouter from 'vue-router'
import ComingSoon from '../components/ComingSoon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/comingSoon',
    name: 'ComingSoon',
    component: ComingSoon,
  },
  {
    path: '/',
    redirect: '/comingSoon',
  },
  //  {
  //   path: '*',
  //   component: NotFoundPage,
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
