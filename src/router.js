import Vue from "vue";
import VueRouter from "vue-router";
import Model from './components/Model.vue'
import Customer from './components/Customer.vue';
Vue.use(VueRouter);

const routes = [
    { path: '/model', component: Model, name: "model" },
    { path: '/customer', component: Customer, name: "customer"}
]

var router = new VueRouter({
    mode: 'history',
    routes
})
export default router;