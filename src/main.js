import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

import App from "./App.vue";

import Home from "@/features/Home";
import Process from "@/features/process/Process";
import SystemUpdate from "@/features/process/SystemUpdate";
import store from './store'

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  {
    path: "/process",
    component: Process,
    children: [
      {
        path: "system_update",
        component: SystemUpdate,
      },
    ],
  },
  { path: "/", component: Home },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: "history",
});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
