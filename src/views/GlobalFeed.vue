<script setup>
import Feed from '@/components/Feed.vue'
const apiUrl = '/articles'
</script>

<template> 
<main class="home-page">
    BANNER
    <div class="container page">
        <div class="row">
            <section class="col-md-9">
                <Feed :api-url="apiUrl"/>
            </section>
            <aside class="col-md-3">
                POPULAR TAG
            </aside>
        </div>

    </div>
</main>
</template>