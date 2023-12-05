<script setup>
    import { computed } from "vue"
    import { storeToRefs } from "pinia"
    import { authMediumStore } from "@/stores/authsStore"
    import { useRoute } from 'vue-router'
    
    const { isLoggedIn } = storeToRefs(authMediumStore())
    const props = defineProps(['apiUrl'])
    const route = useRoute()
    const routeName = computed(() => route.name)
    const tagName = computed(() => route.params.slug)
</script>
<template>
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <li class="nav-item" v-if="isLoggedIn">
        <router-link
          :to="{name: 'yourFeed'}"
          class="nav-link"
          :class="{active: routeName === 'yourFeed'}"
        >
          Your feed
        </router-link>
      </li>

      <li class="nav-item">
        <router-link
          :to="{name: 'globalFeed'}"
          class="nav-link"
          :class="{active: routeName === 'globalFeed'}"
        >
          Global feed
        </router-link>
      </li>

      <li class="nav-item" v-if="tagName">
        <router-link
          :to="{name: 'tag'}"
          class="nav-link"
          :class="{active: routeName === 'tag'}"
        >
          <i class="ion-pound" />
          {{ tagName }}
        </router-link>
      </li>
    </ul>
  </div>
</template>