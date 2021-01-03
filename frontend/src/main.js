import Vue from 'vue'
import App from './App.vue'
import store from "./store/index.js";
import router from "./router.js";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Toasted from 'vue-toasted';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Toasted);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
