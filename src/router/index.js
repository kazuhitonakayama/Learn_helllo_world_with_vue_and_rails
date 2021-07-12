import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Users from '@/components/Users';

Vue.use(Router);
// ここでルーティングを定義している
export default new Router({
  mode: 'history', // for not including "#" in URL
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
  ],
});
