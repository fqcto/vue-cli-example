import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* 此按需加载路由方法能够提高性能 */ './views/About.vue')
    }
  ]
})

router.beforeEach(async(to, from, next)=>{
  if(to.path === "/login") return next();
  const tokenStr = window.sessionStorage.getItem("token");
  if(!tokenStr) return next("/login");
  next();
})

export default router;