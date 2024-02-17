import { createRouter, createWebHistory } from 'vue-router'
import GlobalFeed from '@/views/GlobalFeed.vue'
import Articale from '@/views/Articale.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/',
      name: 'globalFeed',
      component: GlobalFeed
    },
    {
      path: '/feed',
      name: 'yourFeed',
      component: () => import('@/views/YourFeed.vue')
    },
    {
      path: '/tag/:slug',
      name: 'tag',
      component: () => import('@/views/TagFeed.vue')
    },
    {
      path: '/articles/new',
      name: 'createArticle',
      component: GlobalFeed
    },
    {
      path: '/articles/:slug',
      name: 'article',
      component: Articale
    },
    {
      path: '/articles/:slug/edit',
      name: 'editArticle',
      component: GlobalFeed
    },
    {
      path: '/settings',
      name: 'settings',
      component: GlobalFeed
    },
    {
      path: '/profile/:slug',
      name: 'userProfile',
      component: GlobalFeed
    },
    {
      path: '/profile/:slug/favorites',
      name: 'userProfileFavorites',
      component: GlobalFeed
    },
  ]
})

export default router
