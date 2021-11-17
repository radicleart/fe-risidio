import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import AboutUs from '../views/AboutUs.vue'
import Home from '../views/Home.vue'
import Page from '../views/Page.vue'
import Proposal from '../views/Proposal.vue'
import Marketplace from '../views/Marketplace.vue'
import HelpTopics from '../views/HelpTopics.vue'
import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'
import NotFound from '../views/NotFound.vue'
import JoinUs from '../views/JoinUs.vue'
import CSR from '../views/CSR.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    components: { default: Home, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Projects and Services for Blockchain.',
      metaTags: [
        {
          name: 'description',
          content: 'Risidio provides decentralised web solutions. Use our Lightning wallet, create and manage Digital collectibles, and get familiar with Blockchain technology.'
        },
        {
          property: 'og:description',
          content: 'Risidio provides decentralised web solutions. Use our Lightning wallet, create and manage Digital collectibles, and get familiar with Blockchain technology.'
        }
      ]
    }
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    components: { default: AboutUs, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Projects and Services for Blockchain.',
      metaTags: [
        {
          name: 'description',
          content: 'Risidio provides decentralised web solutions. Use our Lightning wallet, create and manage Digital collectibles, and get familiar with Blockchain technology.'
        },
        {
          property: 'og:description',
          content: 'Risidio provides decentralised web solutions. Use our Lightning wallet, create and manage Digital collectibles, and get familiar with Blockchain technology.'
        }
      ]
    }
  },
  {
    path: '/CSR',
    name: 'CSR',
    components: { default: CSR, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Projects and Services for Blockchain.',
      metaTags: [
        {
          name: 'description',
          content: 'Risidio provides decentralised web solutions. Use our Lightning wallet, create and manage Digital collectibles, and get familiar with Blockchain technology.'
        },
        {
          property: 'og:description',
          content: 'Risidio provides decentralised web solutions. Use our Lightning wallet, create and manage Digital collectibles, and get familiar with Blockchain technology.'
        }
      ]
    }
  },
  {
    path: '/Contact',
    name: 'Contact',
    components: { default: Contact, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Projects and Services for Blockchain.',
      metaTags: [
        {
          name: 'description',
          content: 'Risidio provides decentralised web solutions. Use our Lightning wallet, create and manage Digital collectibles, and get familiar with Blockchain technology.'
        },
        {
          property: 'og:description',
          content: 'Risidio provides decentralised web solutions. Use our Lightning wallet, create and manage Digital collectibles, and get familiar with Blockchain technology.'
        }
      ]
    }
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    components: { default: Marketplace, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Projects and Services for Blockchain.',
      isProductPage: true
    }
  },
  {
    path: '/page/:pageId',
    name: 'Page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: { default: Page, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Projects and Services for Blockchain.',
      metaTags: [
        {
          name: 'description',
          content: 'Risidio provides decentralised web solutions. Use our Lightning wallet, create and manage Digital collectibles, and get familiar with Blockchain technology.'
        },
        {
          property: 'og:description',
          content: 'Risidio provides decentralised web solutions. Use our Lightning wallet, create and manage Digital collectibles, and get familiar with Blockchain technology.'
        }
      ]
    }
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
    path: '/Risidio_rBid*',
    name: 'Proposal',
    components: { default: Proposal, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Projects and Services for Blockchain.',
      metaTags: [
        {
          name: 'description',
          content: 'Find the latest News on Blockchain Technology. Learn about Blockchain | Lightning network Wallet | Web 3.0 | Blockstack Community.'
        },
        {
          property: 'og:description',
          content: 'Find the latest News on Blockchain Technology. Learn about Blockchain | Lightning network Wallet | Web 3.0 | Blockstack Community.'
        }
      ]
    }
  },
  {
    path: '/auctions-proposal',
    name: 'proposal',
    components: { default: Proposal, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Projects and Services for Blockchain.',
      metaTags: [
        {
          name: 'description',
          content: 'Find the latest News on Blockchain Technology. Learn about Blockchain | Lightning network Wallet | Web 3.0 | Blockstack Community.'
        },
        {
          property: 'og:description',
          content: 'Find the latest News on Blockchain Technology. Learn about Blockchain | Lightning network Wallet | Web 3.0 | Blockstack Community.'
        }
      ]
    }
  },
  {
    path: '/join-us',
    name: 'join-us',
    components: { default: JoinUs, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Projects and Services for Blockchain.',
      metaTags: [
        {
          name: 'description',
          content: 'Risidio provides decentralised web solutions. Use our Lightning wallet, create and manage Digital collectibles, and get familiar with Blockchain technology.'
        },
        {
          property: 'og:description',
          content: 'Risidio provides decentralised web solutions. Use our Lightning wallet, create and manage Digital collectibles, and get familiar with Blockchain technology.'
        }
      ]
    }
  },
  {
    path: '/not-found',
    name: 'not-found',
    components: { default: NotFound, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '*',
    redirect: { path: '/' }
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
