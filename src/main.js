import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse, faPhone, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons'

library.add(faHouse, faInstagram,faPhone, faFacebook, faArrowRight)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
