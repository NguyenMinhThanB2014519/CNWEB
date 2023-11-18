import { createRouter, createWebHistory } from "vue-router";
import Cart from "../views/Cart.vue";
import Header from "../components/Header.vue";
import Products from "../views/Products.vue";
import users from "../views/users.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Header,
    },
    {
      path: "/Cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/users",
      name: "users",
      component: users,
    },
  ],
});

export default router;
