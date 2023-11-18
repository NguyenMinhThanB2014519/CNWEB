<script setup>
defineProps({
  products: { type: Object, default: () => [] },
});

const $emit = defineEmits([]);
</script>

<template>
  <!-- <div class="card-container">
    <div class="card" style="width: 18rem">
      <img
        class="card-img-top mx-auto"
        :src="products.image"
        alt="Card image cap"
      />
      <div class="card-body text-center">
        <h5 class="card-title">{{ products.product_name }}</h5>
        <p class="card-text">
          {{ products.product_detail }}
        </p>
        <p class="card-text">{{ products.price }}.00VND</p>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
    </div>
  </div> -->
  <div class="card" style="width: 18rem">
    <img class="card-img-top" src="..." alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ products.product_name }}</h5>
      <p class="card-text">
        {{ products.product_detail }}
      </p>
      <button
        type="button"
        class="btn btn-primary"
        @click="$emit('add-ToCart', products.product_id)"
      >
        Add To Cart
      </button>
    </div>
  </div>
</template>

<style scoped></style>
