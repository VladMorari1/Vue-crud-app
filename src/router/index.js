import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/recipe/:slug',
    name: "RecipeView",
    component: ()=>import('../views/RecipeView')
  },
  {
    path: '/edit/:slug',
    name: "EditRecipeView",
    component: ()=>import('../views/EditRecipeView')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
