<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["childEmit"]);
</script>

<template>
  <button @click="() => emit('childEmit', 'Dữ liệu từ component con')">
    Click Me
  </button>
</template>

<style scoped>
/* CSS của bạn ở đây */
</style>
