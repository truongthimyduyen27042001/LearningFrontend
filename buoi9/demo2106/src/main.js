import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './component/Home.vue'


Vue.use(VueRouter)

const router = new VueRouter ({
  routes:[
    {
      path:'/',
      component : Home
    },
    {
      path:'/contact',
      component:Contac
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
