// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import sanitizeHTML from 'sanitize-html';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.prototype.$sanitize = sanitizeHTML;

Vue.use(VueAxios, axios);

/* eslint-disable no-new */
new Vue({
  render: h => h(App), // for resolving white page
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
