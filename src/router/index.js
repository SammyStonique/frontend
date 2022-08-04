import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from '../views/HomePage.vue'
import QuizView from '../views/QuizView.vue'
import LoginView from '../views/LoginView.vue'
import ContactsView from '../views/ContactsView.vue'
import PricingView from '../views/PricingView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: QuizView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: PricingView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
