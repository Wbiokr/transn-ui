import App from './App.vue'
import router from './router.config'
import Store from './store/index.js'

import toast from 'transn/dist/Toast/'

import './utils/filter.js'
import './utils/directive.js'
import './utils/prototype.js'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(toast)

new Vue({
  router,
  store:new Vuex.Store(Store),
  render: h => h(App)
}).$mount('#app')
