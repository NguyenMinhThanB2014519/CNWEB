<script setup></script>

<template>
  <div class="invoice">
    <h1 class="invoice-title">Invoice</h1>
    <div class="customer-info">
      <p><strong>Customer:</strong>khac 1</p>
      <p><strong>Address:</strong>address 1</p>
      <p><strong>Phone number</strong>PN 1</p>
    </div>
    <table class="invoice-table">
      <thead>
        <tr>
          <th>products</th>
          <th>price</th>
          <th>amount</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tr v-for="(item, index) in items" :key="index">
        <td>sp1</td>
        <td>gia 1</td>
        <td>sl 1</td>
        <td>item.price * item.quantity</td>
      </tr>
    </table>
    <div class="total">
      <p><strong>Tổng cộng:</strong> tong cong</p>
    </div>

    <button @click="inHoaDon">In Hóa Đơn</button>
  </div>
</template>

<style>
/* Định dạng hóa đơn */
.invoice {
  width: 300px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  padding: 20px;
}

.invoice-title {
  text-align: center;
}

.customer-info {
  margin-top: 20px;
}

.invoice-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.invoice-table th,
.invoice-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.total {
  margin-top: 20px;
  text-align: right;
}

/* Ẩn nút in khi in trang */
@media print {
  button {
    display: none;
  }
}
</style>

