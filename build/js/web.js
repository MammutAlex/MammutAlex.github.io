import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from "./views/Index";
import About from "./views/About";
import Contact from "./views/Contact";

Vue.use(VueRouter);

new Vue({
    el: '#app',
    router: new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'home',
                component: Index,
            },
            {
                path: '/about',
                name: 'about',
                component: About,
            },
            {
                path: '/contact',
                name: 'contact',
                component: Contact,
            },
        ]
    })
});