import Vue from 'vue';
import Router from 'vue-router';
// 配置路由
// @代表src 在build文件中配置
import Login from '@/views/Login';

Vue.use(Router);

// import HelloWorld from '@/components/HelloWorld'

export default new Router({
  routes: [{
    path: '/login',
    component: Login
  }]
});
