import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/test_canvas",
    name: "testCanvas",
    component: () => import("../views/TestCanvas.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
