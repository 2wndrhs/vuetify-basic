import VueRouter from 'vue-router';
import Vue from 'vue';
import {publicPath} from '../../vue.config.js';
import DashBoard from '../views/DashBoard.vue';
import GridSystem from '../views/GridSystem.vue';
import GridListPage from '../views/GridListPage.vue';
import Breakpoints from '../views/Breakpoints.vue';
import Typography from '../views/Typography.vue';
import Tables from '../views/Tables.vue';
import Forms from '../views/Forms.vue';
import Buttons from '../views/Buttons.vue';
import Icons from '../views/Icons.vue';
import Signin from '../views/auth/Signin.vue'
import Signup from '../views/auth/Signup.vue'
import ProductList from '../views/pages/ProductList.vue'
import DefaultLayout from "../layouts/default/index.vue"
import AuthLayout from "../layouts/authentication/index.vue"
import PageLayout from "../layouts/page/index.vue"

Vue.use(VueRouter);

export const router = new VueRouter({
    base: publicPath,
    mode: 'history',
    routes: [
        {
            path: '/',
            component: DefaultLayout,
            children: [
                {
                    path: '/',
                    name: 'DashBoard',
                    component: DashBoard
                },
                {
                    path: '/grid-system',
                    name: 'GridSystem',
                    component: GridSystem
                },
                {
                    path: '/grid-list-page',
                    name: 'GridListPage',
                    component: GridListPage
                },
                {
                    path: '/breakpoints',
                    name: 'Breakpoints',
                    component: Breakpoints
                },
                {
                    path: '/typography',
                    name: 'Typography',
                    component: Typography
                },
                {
                    path: '/tables',
                    name: 'Tables',
                    component: Tables
                },
                {
                    path: '/forms',
                    name: 'Forms',
                    component: Forms
                },
                {
                    path: '/buttons',
                    name: 'Buttons',
                    component: Buttons
                },
                {
                    path: '/icons',
                    name: 'Icons',
                    component: Icons
                },
            ]
        },
        {
            path: '/authentication',
            component: AuthLayout,
            children: [
                {
                    path: 'sign-in',
                    name: 'Signin',
                    component: Signin
                },
                {
                    path: 'sign-up',
                    name: 'Signup',
                    component: Signup
                }
            ]
        },
        {
            path: '/page',
            component: PageLayout,
            children: [
                {
                    path: 'product-list',
                    name: 'ProductList',
                    component: ProductList
                }
            ]
        }
    ]
})