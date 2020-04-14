import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login'
import Home from '../views/home'
import Layout from '@/views/layout'
import Account from '@/views/account'
import Article from '@/views/article'
import Publish from '@/views/publish'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    component: Layout,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/home',
        component: Home

      },
      {
        path: '/account',
        component: Account
      },
      {
        path: '/article',
        component: Article
      },
      {
        path: '/publish',
        component: Publish
      }
    ]
  },
  {
    path: '/login',
    component: Login

  }
]

const router = new VueRouter({
  routes
})

// 路由拦截器
router.beforeEach((t, f, n) => {
  console.log('拦截器')
  if (t.path === '/login') {
    n()
    return
  }
  const token = window.localStorage.getItem('token')
  if (token) {
    n()
  } else {
    n('/login')
  }
})

export default router
