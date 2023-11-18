<script setup>
import { ref } from "vue";
import child from "./child.vue";
const ascnasc = ref("ascsacascascasc");
</script>

<template>
  <child :mess="ascnasc" />
</template>

<style lang="scss" scoped></style>
