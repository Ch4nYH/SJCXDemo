import Vue from "vue";
import VueRouter from "vue-router";
import Model from './components/Model.vue'
Vue.use(VueRouter);

const routes = [
    { path: '/model', component: Model, name: "model" },
]

var router = new VueRouter({
    mode: 'history',
    routes
})
export default router;