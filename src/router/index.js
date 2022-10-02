import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingPage from '../components/LandingPage/LandingPage.vue'
import CreateStuff from '../components/CreateStuff/CreateStuff.vue'
import EmployeeList from '../components/List/EmployeeList'
import AdminList from '../components/List/AdminList'

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
  {
    path: '/admin',
    name: 'adminList',
    component: AdminList
  },
  {
    path: '/employee',
    name: 'employeeList',
    component: EmployeeList
  },
  
]

const router = new VueRouter({
  routes
})

export default router
