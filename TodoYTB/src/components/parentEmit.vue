<template>
  <ChildComponent @childEmit="handleEvent" />
</template>

<script setup>
import ChildComponent from "./childEmit.vue";

const handleEvent = (data) => {
  alert("Đã nhận được dữ liệu: ", data);
};
</script>

<style scoped>
/* CSS của bạn ở đây */
</style>
