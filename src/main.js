// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import VueFeatherIcon from 'vue-feather-icon';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';


import App from './App';
import router from './router';


Vue.use(Vuetify);
// Vue.use(VueFeatherIcon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});