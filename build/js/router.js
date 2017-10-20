import VueRouter from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: require('./views/Index'),
    },
    {
        path: '/about',
        name: 'about',
        component: require('./views/About'),
    },
    {
        path: '/contact',
        name: 'contact',
        component: require('./views/Contact'),
    },
];
export default new VueRouter({
    mode: 'history',
    routes
});
