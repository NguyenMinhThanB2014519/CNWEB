<script setup>
// import thead from "./thead.vue";
import { defineEmits } from "vue";
import { ref } from "vue";
// import QuantityCart from "./QuatityItem.vue";
const props = defineProps({
  data: Object,
  price: Number,
});
const emit = defineEmits(["delete-item"]);
const data = ref(props.data);

const decreaseAmount = () => {
  if (data.value.amount > 1) {
    data.value.amount--;
  }
};

const increaseAmount = () => {
  data.value.amount++;
};

// const deleteItem = () => {
//   emit("delete-item", data.value.id);
//   // console.log(data.value.id);
// };

const deleteItem = (id) => {
  console.log(id);
};

const deleteitem = (id) => {
  console.log(id);
};
</script>

<template>
  <tr class="text-center">
    <th scope="row">{{ data.id }}</th>

    <td>
      {{ data.desc }}
    </td>

    <td>
      <div class="qty">
        <span class="minus bg-dark" @click="decreaseAmount()">-</span>
        <input type="number" class="count" name="qty" v-model="data.amount" />
        <span class="plus bg-dark" @click="increaseAmount">+</span>
      </div>
    </td>
    <td>
      <button>Delete</button>
    </td>
    <td class="text-center">{{ data.price * data.amount }}</td>
  </tr>
</template>

<style lang="scss" scoped>
.qty .count {
  color: #000;
  display: inline-block;
  vertical-align: top;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  padding: 0 2px;
  min-width: 35px;
  text-align: center;
}
.qty .plus {
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  color: white;
  width: 30px;
  height: 30px;
  font: 30px/1 Arial, sans-serif;
  text-align: center;
  border-radius: 50%;
}
.qty .minus {
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  color: white;
  width: 30px;
  height: 30px;
  font: 30px/1 Arial, sans-serif;
  text-align: center;
  border-radius: 50%;
  background-clip: padding-box;
}
div {
  text-align: center;
}
.minus:hover {
  background-color: #717fe0 !important;
}
.plus:hover {
  background-color: #717fe0 !important;
}
/*Prevent text selection*/
span {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
input {
  border: 0;
  width: 2%;
}
nput::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input:disabled {
  background-color: white;
}
</style>
