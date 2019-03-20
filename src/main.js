import Vue from 'vue';
import ElementUI from 'element-ui';
import axios from 'axios';
import App from './app.vue';

import router from './router';
import store from './store';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
