import Vue from 'vue';
import VueRouter from 'vue-router';
import methods from '../utils/method.js';

Vue.use(VueRouter);

const PageMain = () => import(/* webpackChunkName: "pageMain" */            '../components/mainPage');
const Home = () => import(/* webpackChunkName: "home" */            '../components/pages/home/Home');

const router = new VueRouter({
  mode: 'history',
  base: '/',
  linkActiveClass: "active",
  routes: [
    {
      path: '',
      component: PageMain,
      meta: {
        title: ''
      },
      children: [
        {
          path: '/Home',
          component: Home,
          meta: {
            title: 'dashboard',
            appTitle:'',
            appSubtitle:''
          },
          // children: [
          //   {
          //     path: '',
          //     component: Home,
          //     meta: {
          //       title: 'dashboard',
          //       appTitle:'',
          //       appSubtitle:''
          //     }
          //   },
          // ]
        },
      ]
    },
  ]

});




export default router;
