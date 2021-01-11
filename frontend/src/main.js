import Vue from 'vue'
import App from './App.vue'
import store from "./store/index.js";
import router from "./router.js";
import Toasted from 'vue-toasted';

Vue.use(Toasted);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
