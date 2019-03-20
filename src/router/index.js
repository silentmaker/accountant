import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import(/* webpackChunkName: "js/index" */ '@/pages/index.vue'),
    },
    {
      path: '/trouble',
      name: 'trouble',
      component: () => import(/* webpackChunkName: "js/trouble" */ '@/pages/trouble.vue'),
    },
    {
      path: '/return',
      name: 'return',
      component: () => import(/* webpackChunkName: "js/return" */ '@/pages/return.vue'),
    },
    {
      path: '/profit',
      name: 'profit',
      component: () => import(/* webpackChunkName: "js/profit" */ '@/pages/profit.vue'),
    },
    {
      path: '/tool',
      name: 'tool',
      component: () => import(/* webpackChunkName: "js/tool" */ '@/pages/tool.vue'),
    },
    {
      path: '*',
      redirect: '/index',
    },
  ],
});
