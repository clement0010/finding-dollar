import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import authGuard from './authGuard';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    beforeEnter: authGuard,
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: () => import(/* webpackChunkName: "agenda" */ '../views/Agenda.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: { requiresAuth: true, admin: true },
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    beforeEnter: authGuard,
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "leaderboard" */ '../views/Leaderboard.vue'),
    beforeEnter: authGuard,
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/challenge',
    name: 'Challenge',
    component: () => import(/* webpackChunkName: "login" */ '../views/Challenge.vue'),
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import(/* webpackChunkName: "login" */ '../views/Tools.vue'),
  },
  {
    path: '*',
    name: 'Error',
    component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
