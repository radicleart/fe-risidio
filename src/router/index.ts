import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Page from '../views/Page.vue'
import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    components: { default: Home, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/page/:pageId',
    name: 'Page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: { default: Page, header: MainNavbar, footer: MainFooter }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
