<script setup>

import { ref } from 'vue';

const inputData = ref('');
const updateName = (e) =>{
  inputName.value = e.target.value;
}
const updatePhone = (e) =>{
  inputPhone.value = e.target.value;
}
const updateAddress = (e) =>{
  inputAddress.value = e.target.value;
}

const printData = () =>{
  window.print();
}

</script>

<template>
  <div class="col-8 bg-primary d-flex justify-content-around">
    <form class="w-75 p-3">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Ho ten</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Ho ten"
            :value="inputName"
            @input="updateName"
           

          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">So dien thoai</label>
          <input
            type="text"
            class="form-control"
            id="phoneNumber"
            placeholder="So dien thoai"
            :value="inputPhone"
            @input="updatePhone"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="address">Dia chi</label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="nhap dia chi"
          :value="inputAddress"
            @input="updateAddress"
        />
      </div>
      <div class="d-flex justify-content-center">
        <!-- Center the button -->
        <button type="submit" @click="printData" class="btn btn-primary">Thanh Toan</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@media print{
  button {
    display: none;
  }

  body{
    margin: 0;
    padding: 20px;
    color: red;
  }
}

</style>
