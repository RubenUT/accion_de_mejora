<template>
    <div>
        <ExamenItem v-for="examen in quizData" :key="examen.id" :examen="examen" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ExamenItem from '@/components/ExamenItem.vue';
import QuizData from '@/data/ExamenData';

const quizData = ref(QuizData);
</script>
<style scoped></style>