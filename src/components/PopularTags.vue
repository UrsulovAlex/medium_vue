<script setup>
import { storeToRefs } from "pinia"
import { tagsMediumStore } from "@/stores/popularTags"

const { data, loading, error } = storeToRefs(tagsMediumStore())
const { getPopularTag } = tagsMediumStore()

getPopularTag()
</script>

<template>
    <section class="sidebar" v-if="!loading">
        <p>Popular Tags</p>
        <div class="tag-list">
        <router-link
            v-for="popularTag in data"
            :key="popularTag"
            :to="{name: 'tag', params: {slug: popularTag}}"
            class="tag-default tag-pill"
        >
            {{ popularTag }}
        </router-link>
        </div>
    </section>
</template>