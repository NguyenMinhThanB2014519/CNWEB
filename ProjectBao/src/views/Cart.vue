<script setup>
import { ref, computed } from "vue";
import DetailCartVue from "../components/DetailCart.vue";
import InforCartVue from "../components/InforCart.vue";
import TitleCart from "../components/TitleCart.vue";

const datas = ref([
  {
    id: 1,
    desc: "Ao",
    amount: 1,
    image: "anh1",
    price: 400,
  },
  {
    id: 2,
    desc: "quan",
    amount: 1,
    image: "anh1",
    price: 400,
  },
  {
    id: 3,
    desc: "Non",
    amount: 1,
    image: "anh1",
    price: 400.0333,
  },
]);

const totalProducts = computed(() => {
  return datas.value.reduce((total, product) => total + product.amount, 0);
});

const totalPrice = computed(() => {
  return datas.value.reduce(
    (total, product) => total + product.price * product.amount,
    0
  );
});
</script>

<template>
  <div class="row">
    <InforCartVue />

    <div class="col-4 bg-success">
      <h3 class="float-left">Gio hang</h3>

      <table class="table">
        <TitleCart />
        <tbody>
          <DetailCartVue
            v-for="data in datas"
            :data="data"
            :key="data.id"
            :delete-item="deleteItem"
          />
          <tr class="text-center">
            <td colspan="2">Tổng cộng</td>
            <td>{{ totalProducts }}</td>
            <td></td>
            <td>{{ totalPrice }} VND</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
