import { defineStore } from 'pinia'
import authApi from '@/api/auth'
import {setItem} from '@/helpers/utilizedLocalStorage'
import router from '@/router'

export const authMediumStore = defineStore('authMediumStore', {
  state: () => ({ 
    currentUser: null, 
    loading: false,
    validationErrors: null,
    isLoggedIn: null,
  }),
  getters: {
    getUserStore: (state) => {
      return state.currentUser
    }
  },
  actions: {
    register(payload) {
      this.loading = true
      authApi.register(payload)
        .then((response) => {
          this.currentUser = response?.data?.user
          this.loading = false
          this.isLoggedIn = true
          this.validationErrors = null
          setItem('accessToken', response?.data?.user?.token)
          router.push({name: 'globalFeed'})
        })
        .catch( error => {
          this.validationErrors = error?.response?.data?.errors
          this.loading = false
          this.isLoggedIn = false
        })
    },

    login(payload) {
      this.loading = true
      authApi.login(payload)
        .then((response) => {
          this.currentUser = response?.data?.user
          this.loading = false
          this.isLoggedIn = true
          this.validationErrors = null
          setItem('accessToken', response?.data?.user?.token)
          router.push({name: 'globalFeed'})
        })
        .catch( error => {
          this.validationErrors = error?.response?.data?.errors
          this.loading = false
          this.isLoggedIn = false
        })
    },

    getCurrentUser() {
      this.loading = true
      authApi.getCurrentUser()
      .then((response) => {
        this.currentUser = response?.data?.user
        this.loading = false
        this.isLoggedIn = true
        this.validationErrors = null
      })
      .catch( error => {
        this.validationErrors = error?.response?.data?.errors
        this.loading = false
        this.isLoggedIn = false
      })
    }
  },
})