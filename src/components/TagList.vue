<script setup>
    defineProps(['taglist'])
</script>

<template>
    <ul class="tag-list">
        <li v-for="tag in taglist" :key="tag" class="tag-default tag-pill tag-outline">
            {{ tag }}
        </li>
    </ul>
</template>