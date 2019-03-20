import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: () => import(/* webpackChunkName: "js/index" */ '@/pages/index.vue'),
    },
    {
      path: '/troubles',
      name: 'troubles',
      component: () => import(/* webpackChunkName: "js/troubles" */ '@/pages/troubles.vue'),
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
