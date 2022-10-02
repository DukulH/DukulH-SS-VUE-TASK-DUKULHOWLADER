import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingPage from '../components/LandingPage/LandingPage.vue'
import CreateStuff from '../components/CreateStuff/CreateStuff.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingPage
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'createStuff',
    component: CreateStuff
  },
  // {
  //   path: '/admin',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/employee',
  //   name: 'home',
  //   component: HomeView
  // },
  
]

const router = new VueRouter({
  routes
})

export default router
