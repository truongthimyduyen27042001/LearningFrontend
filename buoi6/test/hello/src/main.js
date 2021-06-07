import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'

import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { faJs, faVuejs } from '@fortawesome/free-brands-svg-icons';

library.add(fas,faJs,faVuejs);


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false



import 'bootstrap/dist/css/bootstrap.css'
new Vue({
  el: '#app',
  render: h => h(App)
})
