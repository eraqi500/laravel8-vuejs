
let login = require('./components/auth/login').default;
let register = require('./components/auth/register').default;
let forget  = require('./components/auth/forget').default;
let logout = require('./components/auth/logout').default;

// End Authentication
let home = require('./components/home').default;

// Employee component
let storeemployee = require('./components/employee/create').default;
let employee = require('./components/employee/index').default;
let editemployee = require('./components/employee/edit').default;

// Supplier Router
let storesupplier = require('./components/supplier/create').default;
let supplier = require('./components/supplier/index').default;
let editsupplier = require('./components/supplier/edit');

//Category Router
let storecategory = require('./components/category/create').default;
let category = require('./components/category/index').default;
let editcategory = require('./components/category/edit').default;

//Product Router
let storeproduct = require('./components/product/create').default;
let product = require('./components/product/index').default;
let editproduct = require('./components/product/edit').default;


export const routes = [
     { path: '/login', component: login, name:'/'},
     { path: '/register', component: register, name:'register'},
     {path: '/forget' , component:forget, name:'forget'},
     {path: '/home' , component:home, name:'home'},
     {path: '/logout' , component:logout, name:'logout'},

     // Employee Management
    {path:'/store-employee', component:storeemployee, name:'store-employee'},
    {path:'/employee', component:employee, name:'employee'},
    {path:'/edit-employee/:id', component:editemployee, name:'edit-employee'},

    // Supplier Management
    {path:'/store-supplier' , component:storesupplier , name:'store-supplier'},
    {path:'/supplier' , component:supplier , name:'supplier'},
    {path:'/edit-supplier:id' , component:editsupplier , name:'edit-supplier'},

    // Category Management
    {path:'/store-category' , component:storecategory , name:'store-category'},
    {path:'/category' , component:category , name:'category'},
    {path:'/edit-category/:id' , component: editcategory, name:'edit-category'},


    // Product Management
    {path:'/store-product' , component:storeproduct , name:'store-product'},
    {path:'/product' , component:product , name:'product'},
    {path:'/edit-product/:id' , component: editproduct, name:'edit-product'},
];
