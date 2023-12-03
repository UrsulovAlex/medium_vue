<script setup>
import Feed from '@/components/Feed.vue'
import PopularTag from '@/components/PopularTags.vue'
import Banner from '@/components/Banner.vue'
const apiUrl = `/articles?tag=`;

</script>

<template> 
<main class="home-page">
    <Banner />
    <div class="container page">
        <div class="row">
            <section class="col-md-9">
                <Feed :api-url="apiUrl" />
            </section>
            <aside class="col-md-3">
                <PopularTag />
            </aside>
        </div>
    </div>
</main>
</template>