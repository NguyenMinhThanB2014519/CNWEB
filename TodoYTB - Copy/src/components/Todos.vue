<script setup>
import TodoItem from "./TodoItem.vue";
import { ref } from "vue";
const todos = ref([
  {
    id: 1,
    title: "viec 1",
    completed: false,
  },
  {
    id: 2,
    title: "viec 2",
    completed: false,
  },
  {
    id: 3,
    title: "viec 3",
    completed: false,
  },
]);

const itemCompleted = (id) => {
  todos.value = todos.value.map((todo) => {
    if (todo.id === id) todo.completed = !todo.completed;
    return todo;
  });
};

const deleteItem = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};
</script>
<template>
  <TodoItem
    v-for="todo in todos"
    :key="todo"
    :todoProps="todo"
    @item-completed="itemCompleted"
    @delete-item="deleteItem"
  />
</template>
