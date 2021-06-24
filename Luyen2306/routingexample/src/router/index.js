import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from '../views/Profile.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path:'/profile/:id',
    name:'Profile',
    component:Profile,
    children:[
      {
        path:'info',
        name:'Info',
        component:()=>import('../views/Info.vue')


      }
    ]
  },
  {
    path:'/profile',
    name:"Profile",
    component:Profile
  },
  {
    path:'/blogs',
    name:'Blogs',
    component:()=>import('../views/Blogs.vue')
  },
  {
    path:'/blog/:id',
    component:()=>import('../views/BlogDetail.vue'),
    children:[
      {
        path:'detail',
        component:()=>import('../components/uncommon/Blog/Blog.vue')
      },
      {
        path:'contact',
        component:()=>import('../components/uncommon/Contact/Contact.vue')
      },
      {
        path:'user/:name',
        component:()=>import('../components/uncommon/Blog/UserBlog.vue')
      }
    ]
    
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import("../views/NotFound.vue"),

  }
];

const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
