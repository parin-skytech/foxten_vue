<template>
  <div id="app">
    <ray-navbar></ray-navbar>
    <ray-sidebar></ray-sidebar>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    "hide-footer": Boolean
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.modal-style {
  background-color: #121212;
  color: #eeeeee;
}

.modal-input {
  background-color: #232b32;
  color: #999999;
}

.ray-btn-primary {
  background-color: #43b7e9;
  color: #eeeeee;
}
</style>
