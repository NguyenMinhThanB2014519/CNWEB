<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";

import PrintBill from "./components/PrintBill.vue";
</script>

<template>
  <Header />
  <Container />
  <PrintBill/>
  <RouterView />
</template>

<style>
* {
  font-family: "Rubik", sans-serif;
}
.container {
  max-width: 1600px;
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,600;0,700;0,800;0,900;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@300;500&family=Rubik:wght@300;400;500;600;700&display=swap");
</style>
