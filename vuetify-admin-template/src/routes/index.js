import VueRouter from 'vue-router';
import Vue from 'vue';
import {publicPath} from '../../vue.config.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    base: publicPath,
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/layouts/default/index.vue'),
            children: [
                {
                    path: '/',
                    name: 'DashBoard',
                    component: () => import('@/views/DashBoard.vue')
                },
                {
                    path: '/test',
                    name: 'Test',
                    component: () => import('@/views/Test.vue')
                },
                {
                    path: '/grid-system',
                    name: 'GridSystem',
                    component: () => import('@/views/GridSystem.vue')
                },
                {
                    path: '/grid-list-page',
                    name: 'GridListPage',
                    component: () => import('@/views/GridListPage.vue')
                },
                {
                    path: '/breakpoints',
                    name: 'Breakpoints',
                    component: () => import('@/views/Breakpoints.vue')
                },
                {
                    path: '/typography',
                    name: 'Typography',
                    component: () => import('@/views/Typography.vue')
                },
                {
                    path: '/tables',
                    name: 'Tables',
                    component: () => import('@/views/Tables.vue')
                },
                {
                    path: '/forms',
                    name: 'Forms',
                    component: () => import('@/views/Forms.vue')
                },
                {
                    path: '/buttons',
                    name: 'Buttons',
                    component: () => import('@/views/Buttons.vue')
                },
                {
                    path: '/icons',
                    name: 'Icons',
                    component: () => import('@/views/Icons.vue')
                },
            ]
        },
        {
            path: '/authentication',
            component: () => import('@/layouts/authentication/index.vue'),
            children: [
                {
                    path: 'sign-in',
                    name: 'Signin',
                    component: () => import('@/views/auth/Signin.vue')
                },
                {
                    path: 'sign-up',
                    name: 'Signup',
                    component: () => import('@/views/auth/Signup.vue')
                }
            ]
        },
        {
            path: '/page',
            component: () => import('@/layouts/page/index.vue'),
            children: [
                {
                    path: 'product-list',
                    name: 'ProductList',
                    component: () => import('@/views/pages/ProductList.vue')
                }
            ]
        }
    ]
})