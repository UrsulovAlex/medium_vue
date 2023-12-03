<script setup>
    const props = defineProps({
    message: { type: String, required: false },
    default: 'Something went wrong'
});
</script>

<template>
    <p>{{ props.message }}</p>
</template>