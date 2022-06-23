import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@/assets/scss/custom.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronCircleLeft, faChevronCircleRight, faAmbulance, faAnchor, faAlignCenter, faBahai, faHeart, faEquals, faCopy, faAngleDoubleUp, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/link-resolver'
import htmlSerializer from './prismic/html-serializer'
import Notifications from 'vue-notification'
import 'vueperslides/dist/vueperslides.css'
import VueScrollTo from 'vue-scrollto'

library.add(faChevronCircleRight)
library.add(faChevronCircleLeft)
library.add(faAmbulance)
library.add(faAlignCenter)
library.add(faBahai)
library.add(faAnchor)
library.add(faHeart)
library.add(faEquals)
library.add(faCopy)
library.add(faAngleDoubleUp)
library.add(faAngleDoubleDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(PrismicVue, {
  endpoint: 'https://risidiocorp.prismic.io/api/v2',
  linkResolver,
  htmlSerializer
})
Vue.use(Notifications, { closeOnClick: true, duration: 6000 })
Vue.use(VueScrollTo)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
