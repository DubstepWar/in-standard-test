require('./bootstrap');

import Vue from 'vue'
// Route info for VueRouter
import router from './routes'
// component file
import App from "./components/App";

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router
});

