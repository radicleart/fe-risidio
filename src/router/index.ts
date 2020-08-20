import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import AboutUs from '../views/AboutUs.vue'
import Home from '../views/Home.vue'
import Page from '../views/Page.vue'
import LsatDemo from '../views/LsatDemo.vue'
import Product from '../views/Product.vue'
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
    path: '/services',
    name: 'services',
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
    path: '/not-found',
    name: 'not-found',
    components: { default: NotFound, header: MainNavbar, footer: MainFooter }
  },
  {
    path: '/preview',
    name: 'preview',
    components: { default: Preview, header: MainNavbar, footer: MainFooter },
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
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

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
