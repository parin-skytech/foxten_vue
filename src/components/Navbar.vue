<template>
  <div id="navbar">
    <div id="navbar-content-container">
      <div>
        <img src="../assets/foxten_logo_2.svg" alt="FoxTEN logo" id="logo" />
        <span>FOXTEN</span>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ray-navbar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar {
  height: 75px;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  background-color: black;
  color: white;
}

#navbar-content-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

#logo {
  margin-left: 80px;
  height: 40px;
  margin-top: 15px;
}
</style>
