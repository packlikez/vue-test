<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
};
</script>

<style>
#app {
  border: 1px solid black;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /*margin-top: 60px;*/
  -webkit-font-smoothing: antialiased;
  height: 590px;

  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 614px;
}

* {
  margin: 0;
}

body {
}
</style>
