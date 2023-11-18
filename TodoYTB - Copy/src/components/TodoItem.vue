<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  todoProps: Object,
});
const emit = defineEmits(["item-completed", "delete-item"]);
const markItemCompleted = () => {
  console.log(props.todoProps.id);
};
</script>
<template>
  <p :class="['todoItems', todoProps.completed ? 'isCompleted' : '']">
    <input
      type="checkbox"
      :checked="todoProps.completed"
      @change="emit('item-completed', props.todoProps.id)"
    />
    {{ todoProps.title }}
    <button @click="emit('delete-item', props.todoProps.id)">Delete</button>
  </p>
</template>

<style scoped>
.todoItems {
  flex-direction: row;
}
button {
  float: right;
}

.isCompleted {
  text-decoration: line-through;
}
</style>
