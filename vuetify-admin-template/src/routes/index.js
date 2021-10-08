import VueRouter from 'vue-router';
import Vue from 'vue';
import {publicPath} from '../../vue.config.js';
import DashBoard from '../views/DashBoard.vue';
import GridSystem from '../views/GridSystem.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    base: publicPath,
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/dashboard',
            name: 'DashBoard',
            component: DashBoard
        },
        {
            path: '/grid-system',
            name: 'GridSystem',
            component: GridSystem
        }
    ]
})