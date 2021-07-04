import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import InforUser from "../views/InforUser.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    layout: "defaultLayout",
  },
  {
    path: "/inforuser/:id",
    name: "InforUser",
    component: InforUser,
  },
  {
    path: "/auth/login",
    component: () => import("../views/Login.vue"),
    meta: { layout: "unauth" },
  },
  {
    path: "/auth/register",
    component: () => import("../views/Register.vue"),
    meta: { layout: "unauth" },
  },
  {
    path: "*",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
