<script setup>
import { feedMediumStore } from "@/stores/feedStore"
import { storeToRefs } from "pinia"
import { useRoute } from 'vue-router'
import { computed, watch } from "vue"
import QueryString  from "@/libraries/queryString"
import { LIMIT } from '@/helpers/const'
import Pagination from '@/components/Pagination.vue'
import Loading from '@/components/Loading.vue'
import ErrorMessage from "@/components/ErrorMessage.vue"

const props = defineProps(['apiUrl'])
const { data, loading, error } = storeToRefs(feedMediumStore())
const { getFeed } = feedMediumStore()

const route = useRoute()
const baseUrl = computed(() => route.path)
const currentPage = computed(() => Number(route.query.page || '1'))
const offset = computed(() => currentPage.value * LIMIT - LIMIT)
const currentUrl = computed(() => {
  const currentSlug = route.params.slug
  return `${props.apiUrl}${currentSlug}`
})

getFeed(currentUrl.value)
watch(() => route.params.slug, () => {
  fetchFeed()
})

function fetchFeed() {
    const parsedUrl = QueryString.parseUrl(currentUrl.value)
    const stringifiedParams = QueryString.stringify({
    limit: LIMIT,
    offset: offset.value,
    ...parsedUrl.query
    })
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
    getFeed(apiUrlWithParams)
}

</script>
<template>
  <Loading v-if="loading"/>
  <ErrorMessage v-if="error" :message="error" />
  <section class="feed" v-if="!loading">
    <article
      class="article-preview"
      v-for="(article, index) in data.articles"
      :key="index"
    >
      <header class="article-meta">
        <router-link
          :to="{
            name: 'userProfile',
            params: { slug: article.author.username },
          }"
        >
          <img :src="article.author.image" />
        </router-link>
        <h3 class="info">
          <router-link
            :to="{
              name: 'userProfile',
              params: { slug: article.author.username },
            }"
          >
            {{ article.author.username }}</router-link
          >
          <time class="date">{{ article.createdAt }}</time>
        </h3>
        <div class="pull-xs-right">ADD TO FAVORITES</div>
      </header>
      <router-link
        :to="{ name: 'article', params: { slug: article.slug } }"
        class="preview-link"
      >
        <h1>{{ article.title }}</h1>
        <p>{{ article.description }}</p>
        <span>Read more...</span>
        TAG LIST
      </router-link>
    </article>
  </section>
  <template v-if="!loading">
    <Pagination
    :total="data.articlesCount"
    :limit="LIMIT"
    :current-page="currentPage"
    :url="baseUrl"
    />
  </template>
</template>
<style scopes>
.date {
  padding-top: 8px;
}
</style>