import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@/assets/scss/custom.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAmbulance, faAnchor, faAlignCenter, faBahai, faHeart, faEquals, faCopy, faAngleDoubleUp, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/link-resolver'
import htmlSerializer from './prismic/html-serializer'
import Notifications from 'vue-notification'

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
  endpoint: 'https://risidio-journal.prismic.io/api/v2',
  linkResolver,
  htmlSerializer
})
Vue.use(Notifications, { closeOnClick: true, duration: 6000 })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
