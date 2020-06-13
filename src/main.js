import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import VueFullPage from 'vue-fullpage.js'

var firebaseConfig = {
  apiKey: "AIzaSyCkS0tpIKt8WWSDmJTi-Tc20BgEIRscmTc",
  authDomain: "sitemind-6997f.firebaseapp.com",
  databaseURL: "https://sitemind-6997f.firebaseio.com",
  projectId: "sitemind-6997f",
  storageBucket: "sitemind-6997f.appspot.com",
  messagingSenderId: "935276287700",
  appId: "1:935276287700:web:91da1a6a66cd2bbe9c8d41",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

Vue.use(VueFullPage);

//scroll directive, just in case
Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
