<script setup>
import { authMediumStore } from "@/stores/authsStore"
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
const { getCurrentUser } = authMediumStore()

getCurrentUser()
</script>

<template>
  <Header />
  <RouterView />
</template>
