<script setup>
import { ref, onMounted, computed } from "vue";

import makeProductsService from "../services/producs.service";
import ProductsList from "@/components/ProductsList.vue";

const products = ref([]);
// const filteredMon = computed(() => {});

async function getProductsList() {
  products.value = await makeProductsService.getAllProducts();
  console.log(await makeProductsService.getAllProducts());
}

onMounted(() => getProductsList());
</script>
<template>
  <ProductsList
    v-for="product in products"
    :key="product.product_id"
    :products="product"
    @add-To-Cart="addToCart"
  >
  </ProductsList>
</template>

<style lang="scss" scoped></style>
