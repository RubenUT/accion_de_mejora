<template>
    <div>
        <ExamenItem v-for="(examen, index) in preguntas" :key="index" :examen="examen"/>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { IExamen } from '@/interfaces/IExamen';
import ExamenItem from './ExamenItem.vue';
const preguntas = ref<IExamen[]>([]);
</script>
<style scoped></style>