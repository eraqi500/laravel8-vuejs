
require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

window.Vue = require('vue').default;
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';

// Router Imported
import {routes} from './routes';

//Import User Class
import User from "./Helpers/User";
Window.User = User;

//import Notification
import Notification from "./Helpers/Notification";
window.Notification = Notification;



// Sweet Alert start
import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

window.Toast = Toast;

// Sweet Alert End

window.Reload = new Vue();


Vue.use(VueRouter, axios);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});

