import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from "./components/Pages/HomeComponent";
import UsersComponent from "./components/Pages/UsersComponent";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HomeComponent',
            component: HomeComponent
        },
        {
            path: '/users',
            name: 'UsersComponent',
            component: UsersComponent
        },
    ],
})

