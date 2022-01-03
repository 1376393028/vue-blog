import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index.vue'
import Login from '@/pages/login/index.vue'
import Register from '@/pages/register/index.vue'
import User from '@/pages/user/index.vue'
import My from '@/pages/my/index.vue'
import Create from '@/pages/create/index.vue'
import Detail from '@/pages/detail/index.vue'
import Edit from '@/pages/edit/index.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/create',
      component: Create
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/edit',
      component: Edit
    }
  ]
})
