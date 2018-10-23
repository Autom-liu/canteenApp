import Vue from 'vue';
import Router from 'vue-router';
import Register from '@/pages/register/home';
import RegForm from '@/pages/register/regForm';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'register',
		},
		{
      path: '/register',
      name: 'register',
			component: Register,
		},
		{
      path: '/register/:type',
      name: 'regForm',
			component: RegForm,
    },
  ],
});
