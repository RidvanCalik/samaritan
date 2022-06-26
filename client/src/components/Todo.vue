<script setup>
import { defineProps } from "vue";
const props = defineProps(["id", "title", "description", "date"]);
</script>

<template>
  <div class="todo container">
    <h2>
      {{ props.title }}
    </h2>
    <h3 class="content-title">
      <div class="active-dot"></div>
      DURUM
    </h3>
    <h2>bişey</h2>
  </div>
</template>

<style scoped lang="scss">
.todo {
  width: 300px;
  height: 300px;
}
</style>
