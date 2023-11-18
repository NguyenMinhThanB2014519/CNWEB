<script setup></script>

<template>
  <div class="col-8 bg-primary d-flex justify-content-around">
    <form class="w-75 p-3">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Ho ten</label>
          <input
            type="Ho ten"
            class="form-control"
            id="name"
            placeholder="Ho ten"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">So dien thoai</label>
          <input
            type="text"
            class="form-control"
            id="phoneNumber"
            placeholder="So dien thoai"
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
        />
      </div>
      <div class="d-flex justify-content-center">
        <!-- Center the button -->
        <button type="submit" class="btn btn-primary">Thanh Toan</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
