<script setup></script>

<template>
  <div class="MasterHeader container">
    <h1>TODO</h1>
    <div>
      <h2 class="active">
        <router-link :to="{ name: 'CurrentTodos' }">Yapılcaklar</router-link>
      </h2>
      <h2>
        <router-link :to="{ name: 'PastTodos' }">Yapılanlar</router-link>
      </h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.MasterHeader {
  width: 300px;
  div {
    display: flex;
    justify-content: space-around;
  }

  .active {
    border-radius: 4px;
    padding: 0 10px;
    background-color: white;
    a {
      color: black;
    }
  }
}
</style>
