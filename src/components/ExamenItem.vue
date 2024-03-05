<template>
    <h2>{{ examen.title }}</h2>
</template>
<script lang="ts" setup>

import type { IExamen } from '@/interfaces/IExamen';
const props = defineProps<{examen : IExamen}>();
</script>
<style scoped></style>