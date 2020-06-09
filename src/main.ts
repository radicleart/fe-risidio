import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import '@/assets/scss/custom.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faEquals, faCopy, faAngleDoubleUp, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic/linkResolver'
import Notifications from 'vue-notification'

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
  endpoint: 'https://risidio.prismic.io/api/v2',
  linkResolver
})
Vue.use(Notifications, { closeOnClick: true, duration: 6000 })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
