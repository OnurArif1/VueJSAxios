import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { routes } from "./routes";
import axios from 'axios' //axios ' un global olarak tanımlanması

//global olarak axios tanımlamsı yağıldı
axios.defaults.baseURL="https://vuejs-axios-blog-47a5f-default-rtdb.firebaseio.com"
axios.defaults.headers.common["Authorization"]="onur_auth_key"
axios.defaults.headers.get["Accepts"]="application/json"

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
