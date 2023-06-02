import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeStuff from "../views/HomeStuff.vue";
// import AboutView from "../views/AboutView.vue";
import AboutStuff from "../views/AboutStuff.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: "/home",
    name: "home",
    component: HomeStuff
  },
  {
    path: "/about",
    name: "about",
    component: AboutStuff,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const title = to.meta.title;
  // if (title) {
  //   document.title = title;
  // }
  next();
});
export default router;
