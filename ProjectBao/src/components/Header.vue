<template>
  <!-- <Navbar class="" /> -->
  <div class="bg-secondary">
    <div class="d-flex justify-content-between container">
      <div>
        <img src="../assets/Vue_Logo_Black.png" alt="" width="70px" />
      </div>

      <ul class="d-flex justify-content-between">
        <router-link to="/home">Home</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/contacts">Contacts</router-link>
        <router-link to="/news">News</router-link>
      </ul>

      <!-- <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          class="btn btn-outline-secondary my-2 my-sm-0 text-dark"
          type="submit"
        >
          <i class="search fa-solid fa-magnifying-glass"></i>
        </button>
      </form> -->
      <Search />

      <div class="icon">
        <router-link to="/Cart">
          <i
            class="cart fa-solid fa-cart-shopping"
            @add-To-Cart="addToCart"
          ></i>
        </router-link>

        <RouterLink to="/users">
          <i class="fa-solid fa-user text-dark ml-3"> </i
        ></RouterLink>
        <!-- <a href="" class="user"
          ><i class="fa-solid fa-user text-dark ml-3"> </i>
        </a> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import Search from "./Search.vue";
const addToCart = (id) => {
  console.log(id);
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  a {
    position: relative;

    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    color: white;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #91b080;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
    }
    &:hover {
      color: #91b080;
      &::before {
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }
  }
}

.icon {
  padding: 5px;
  //   align-content: center;
  align-items: center;
  display: flex;
  font-size: 25px;

  .cart {
    margin-left: 15px;
    &:hover {
      color: #91b080;
      transition: 0.5s ease;
    }
  }
}
button {
  .search {
    color: black;
  }
}
img {
  padding-top: 5px;
  margin-left: 36px;
}
</style>
