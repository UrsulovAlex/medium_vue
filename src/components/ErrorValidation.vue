<script setup>
    defineProps(['errorMessages'])
</script>

<template>
    <ul class="error-messages">
        <li v-for="errorMessage in errorMessages" :key="errorMessage">
            {{ errorMessage }}
        </li>
    </ul>
</template>