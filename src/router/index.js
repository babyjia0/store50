import Vue from 'vue';
import Router from 'vue-router';
// 配置路由
// @代表src 在build文件中配置
import Login from '@/views/Login';
import Home from '@/views/Home';
import Users from '@/views/users/list';
import Rights from '@/views/rights/Rights';

Vue.use(Router);

// import HelloWorld from '@/components/HelloWorld'

export default new Router({
  routes: [{
    name: 'login',
    path: '/login',
    component: Login
  }, {
    name: 'home',
    path: '/',
    component: Home,
    children: [
      {
        name: 'users',
        path: '/users',
        component: Users
      },
      {
        name: 'rights',
        path: '/roles',
        component: Rights
      }
    ]
  }]
});
