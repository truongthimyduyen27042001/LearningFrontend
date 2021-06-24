import Home from './component/Home.vue'
import Contact from './component/Contact.vue'
import Product from './component/Products.vue'

Vue.use(VueRouter)

const router = new VueRouter ({
  routes:[
    {
      path:'/',
      component : Home
    },
    {
      path:'/contact',
      component:Contact
    },
    {
      path:'/products',
      component:Products
    }
  ]
})