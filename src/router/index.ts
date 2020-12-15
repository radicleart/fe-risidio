import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import AboutUs from '../views/AboutUs.vue'
import Home from '../views/Home.vue'
import Page from '../views/Page.vue'
import LsatDemo from '../views/LsatDemo.vue'
import Proposal from '../views/Proposal.vue'
import Product from '../views/Product.vue'
import Products from '../views/Products.vue'
import HelpTopics from '../views/HelpTopics.vue'
import MainNavbar from '@/layout/MainNavbar.vue'
import MainFooter from '@/layout/MainFooter.vue'
import NotFound from '../views/NotFound.vue'
import BlogHome from '../views/BlogHome.vue'
import Post from '../views/Post.vue'
import JoinUs from '../views/JoinUs.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    components: { default: Home, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Products and Services for Blockchain.',
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
      title: 'Risidio - Products and Services for Blockchain.',
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
    path: '/education',
    name: 'education',
    components: { default: Page, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Products and Services for Blockchain.',
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
    path: '/products/:productId',
    name: 'product',
    components: { default: Product, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Products and Services for Blockchain.',
      isProductPage: true
    }
  },
  {
    path: '/products',
    name: 'products',
    components: { default: Products, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Products and Services for Blockchain.',
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
    path: '/rpay-demo',
    name: 'rpay-demo',
    components: { default: LsatDemo, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Products and Services for Blockchain.',
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
    path: '/page/:pageId',
    name: 'Page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: { default: Page, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Products and Services for Blockchain.',
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
    path: '/blog',
    name: 'blog-home',
    components: { default: BlogHome, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Products and Services for Blockchain.',
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
    path: '/blog/:uid',
    name: 'post',
    components: { default: Post, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Products and Services for Blockchain.',
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
    path: '/Risidio_rBid*',
    name: 'Proposal',
    components: { default: Proposal, header: MainNavbar, footer: MainFooter },
    meta: {
      title: 'Risidio - Products and Services for Blockchain.',
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
      title: 'Risidio - Products and Services for Blockchain.',
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
      title: 'Risidio - Products and Services for Blockchain.',
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isProductPage)) {
    if (to.params.productId === 'r-pay') {
      to.meta.metaTags = [
        {
          name: 'description',
          content: "Carry out transactions without having to enter your personal details, use Risidio's own Lightning wallet. Simple | Secure | Fast."
        },
        {
          property: 'og:description',
          content: "Carry out transactions without having to enter your personal details, use Risidio's own Lightning wallet. Simple | Secure | Fast."
        }
      ]
    } else if (to.params.productId === 'loopbomb') {
      to.meta.metaTags = [
        {
          name: 'description',
          content: "Get creative with Risidio's Loopbomb, an art mixing engine which lets you create your own unique collectible and trade it. Loopbomb has a Smart Contract feature for provenance."
        },
        {
          property: 'og:description',
          content: "Get creative with Risidio's Loopbomb, an art mixing engine which lets you create your own unique collectible and trade it. Loopbomb has a Smart Contract feature for provenance."
        }
      ]
    } else if (to.params.productId === 'r-stack') {
      to.meta.metaTags = [
        {
          name: 'description',
          content: 'Wanna Swap your Bitcoins for STX using Lightning channel or a Smart Contract? Use rStack and get STX using Lightning Bitcoin or simply write a smart contract.'
        },
        {
          property: 'og:description',
          content: 'Wanna Swap your Bitcoins for STX using Lightning channel or a Smart Contract? Use rStack and get STX using Lightning Bitcoin or simply write a smart contract.'
        }
      ]
    } else {
      to.meta.metaTags = [
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
  }
  next()
})

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => {
    if (el.parentNode !== null) { el.parentNode.removeChild(el) }
  })

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  })
  // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag))

  next()
})

export default router
