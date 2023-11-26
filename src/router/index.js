import { createRouter, createWebHistory } from 'vue-router'
import GlobalFeed from '@/views/GlobalFeed.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/',
      name: 'globalFeed',
      component: GlobalFeed
    },
    {
      path: '/feed',
      name: 'yourFeed',
      component: GlobalFeed
    },
    {
      path: '/tag/:slug',
      name: 'tag',
      component: GlobalFeed
    },
    {
      path: '/articles/new',
      name: 'createArticle',
      component: GlobalFeed
    },
    {
      path: '/articles/:slug',
      name: 'article',
      component: GlobalFeed
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
