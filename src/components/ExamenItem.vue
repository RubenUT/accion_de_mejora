<template>
    <h2>{{ examen.title }}</h2>
    <select v-model="selectedOption">
        <option v-for="(option,index) in examen.options" :key="index" :value="index + 1">{{ option }}</option>
    </select>
    <p>Respuesta seleccionada {{ selectedOption }}</p>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import type { IExamen } from '@/interfaces/IExamen';
const { examen } = defineProps(['examen']);
const selectedOption = ref<number>(examen.answer);
</script>
<style scoped></style>