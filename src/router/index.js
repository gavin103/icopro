import Vue from 'vue'
import store from '../store/index.js'
import Router from 'vue-router'

Vue.use(Router);

//路由懒加载
const Login = resolve => {
  require.ensure(['../components/Login.vue'], () => {
    resolve(require('../components/Login.vue'));
  });
};

const Register = resolve => {
  require.ensure(['../components/Register.vue'], () => {
    resolve(require('../components/Register.vue'));
  });
};

const Hello = resolve => {
  require.ensure(['../components/Hello.vue'], () => {
    resolve(require('../components/Hello.vue'));
  });
};
const Home = resolve => {
  require.ensure(['../components/Home/Home.vue'], () => {
    resolve(require('../components/Home/Home.vue'));
  });
};
const List = resolve => {
  require.ensure(['../components/List/List.vue'], () => {
    resolve(require('../components/List/List.vue'));
  });
};
const Detail = resolve => {
  require.ensure(['../components/Detail/Detail.vue'], () => {
    resolve(require('../components/Detail/Detail.vue'));
  });
};
const Crm = resolve => {
  require.ensure(['../components/Crm/Crm.vue'], () => {
    resolve(require('../components/Crm/Crm.vue'));
  });
};
const Error404 = resolve => {
  require.ensure(['../components/404.vue'], () => {
      resolve(require('../components/404.vue'));
  }); 
};

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/icolist',
      name: 'List',
      component: List,
    },
    {
      path: '/icodetail/:id',
      name: 'Detail',
      component: Detail,
    },
    {
      path: '/profile',
      name: 'Hello',
      component: Hello,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/crm',
      name: 'Crm',
      component: Crm,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register 
    },
    {
      path: '*',
      name: 'error',
      component: Error404
    }
  ]
});

//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  //获取store里面的token
  let token = store.state.token;
  //判断要去的路由有没有requiresAuth
  if(to.meta.requiresAuth){

    if(token){
      next();
    }else{
      next({
        path: '/login',
        query: { redirect: to.fullPath }  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
      });
    }

  }else{
    next();//如果无需token,那么随它去吧
  }
});

export default router;


