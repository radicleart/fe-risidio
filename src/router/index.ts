import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Page from '../views/Page.vue'
import Products from '../views/Products.vue'
import HelpTopics from '../views/HelpTopics.vue'
import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'
import NotFound from '../views/NotFound.vue'
import Preview from '../views/Preview.vue'
import BlogHome from '../views/BlogHome.vue'
import Post from '../views/Post.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    components: { default: Home, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/home',
    name: 'home',
    components: { default: Home, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/education',
    name: 'education',
    components: { default: Page, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/services',
    name: 'services',
    components: { default: Page, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/products',
    name: 'products',
    components: { default: Products, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/page/:pageId',
    name: 'Page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: { default: Page, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/help/topics/:topicId',
    name: 'help-topic',
    components: {
      default: HelpTopics,
      header: MainNavbar,
      footer: MainFooter
    },
    meta: { requiresAuth: false }
  },
  {
    path: '/help/topics',
    name: 'help-topics',
    meta: { requiresAuth: false },
    components: { default: HelpTopics, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/blog',
    name: 'blog-home',
    components: { default: BlogHome, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/blog/:uid',
    name: 'post',
    components: { default: Post, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/not-found',
    name: 'not-found',
    components: { default: NotFound, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/preview',
    name: 'preview',
    components: { default: Preview, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '*',
    redirect: { name: 'not-found' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
