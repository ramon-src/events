// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueFeatherIcon from 'vue-feather-icon';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as firebase from 'firebase'
import './styles/sass/app.scss'
import { store } from './store'

import App from './App'
import router from './router'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAsgeWoVgw7z6fZO4kdGW1u7JY54ToHq9E',
      authDomain: 'events-65c58.firebaseapp.com',
      databaseURL: 'https://events-65c58.firebaseio.com',
      projectId: 'events-65c58',
      storageBucket: 'events-65c58.appspot.com'
    })
  }
})
