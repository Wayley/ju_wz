import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/views/Index').default
    },
    {
      path: '/session',
      name: 'session',
      component: require('@/views/Session/Session').default
    },
    {
      path: '/circle',
      name: 'circle',
      component: require('@/views/Circle/Circle').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
