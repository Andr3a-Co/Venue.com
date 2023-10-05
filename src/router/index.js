import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/venues',
    name: 'venues',
    component: () => import(/* webpackChunkName: "pricing" */ '../views/VenueView.vue')
  },
  {
    path: '/pricing',
    name: 'pricing',    
    component: () => import(/* webpackChunkName: "pricing" */ '../views/PricingView.vue')
  },
  {
    path: '/FAQs',
    name: 'FAQs',    
    component: () => import(/* webpackChunkName: "pricing" */ '../views/FAQView.vue')
  },
  {
    path: '/venues/:id',
    name: 'VenueDetails',    
    component: () => import(/* webpackChunkName: "pricing" */ '@/components/VenueDetails.vue')
  },

  {
    path: '/enquiry',
    name: 'Enquiry',    
    component: () => import(/* webpackChunkName: "pricing" */ '@/components/Enquiry.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
