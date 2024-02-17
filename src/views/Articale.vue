<script setup>
import { articleApiStore } from "@/stores/articleStore"
import { storeToRefs } from "pinia"
import { useRoute } from 'vue-router'
import TagList from '@/components/TagList.vue'

const route = useRoute()
const { data, loading, error } = storeToRefs(articleApiStore())
const { getArticle } = articleApiStore()
console.log('this.route',route.params.slug)
getArticle(route.params.slug)
</script>
<style scopes>
.info a,
.article-meta .info span.date {
  color: white;
}
</style>

<template> 
    <main class="home-page">
        <div class="article-page">
        <div class="banner">
        <div class="container" v-if="!loading">
            <h1>{{ data.title }}</h1>
            <div class="article-meta">
            <router-link
                :to="{name: 'userProfile', params: {slug: data.author.username}}"
            >
                <img :src="data.author.image" />
            </router-link>
            <div class="info">
                <router-link
                :to="{
                    name: 'userProfile',
                    params: {slug: data.author.username}
                }"
                >
                {{ data.author.username }}
                </router-link>
                <span class="date">{{ data.createdAt }}</span>
            </div>
            <span v-if="isAuthor">
                <router-link
                class="btn btn-outline-secondary btn-sm"
                :to="{name: 'editArticle', params: {slug: data.slug}}"
                >
                <i class="ion-edit" />
                Edit Article
                </router-link>
                <button
                class="btn btn-outline-danger btn-sm"
                @click="deleteArticle"
                >
                <i class="ion-trash-a" />
                Delete Article
                </button>
            </span>
            </div>
        </div>
        </div>
        <div class="container page">
        <div class="row article-content" v-if="!loading">
            <div class="col-xs-12">
            <div>
                <p>{{ data.body }}</p>
            </div>
                <TagList :taglist = "data.tagList" />
            </div>
        </div>
        </div>
    </div>
    </main>
</template>