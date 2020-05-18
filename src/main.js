import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from './router.js'
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.min.css'
//
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/custom.scss';
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')