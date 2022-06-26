<script setup>
import { RouterLink, RouterView } from "vue-router";
import MasterHeader from "@/components/MasterHeader.vue";
</script>

<template>
  <MasterHeader></MasterHeader>
  <router-view />
</template>

<style lang="scss">
@import "@/assets/base.scss";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  min-height: 100vh;
  background-color: rgb(22, 22, 22);
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  display: flex;
  flex-direction: column;
}
</style>
