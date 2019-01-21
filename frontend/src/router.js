import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/main_page.vue'
import Login from './views/login.vue'
import NotFoundPage from './components/notFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'home',
      component: Main
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFoundPage
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
