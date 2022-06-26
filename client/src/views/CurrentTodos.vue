<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Todo from "@/components/Todo.vue";

var todos = ref();
onMounted(() => {
  getTodos();
});
async function getTodos() {
  todos.value = (await axios.get("http://localhost:5000/")).data;
}
</script>

<template>
  <Todo
    v-for="todo in todos"
    :id="todo._id"
    :title="todo.title"
    :description="todo.description"
    :date="todo.date"
  ></Todo>
</template>
