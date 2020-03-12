<template>
  <div id="navbar">
    <div id="navbar-content-container">
      <div>
        <img src="../assets/foxten_logo_2.svg" alt="FoxTEN logo" id="logo" />
        <span>FOXTEN</span>
      </div>
      <div>
        <i class="fas fa-columns icon-spacing icon-color"></i>
        <i class="fas fa-user-alt icon-spacing icon-color"></i>
        <i
          class="fas fa-upload icon-spacing icon-color"
          style="cursor: pointer;"
        ></i>
        <i
          class="fas fa-sign-out-alt icon-color"
          style="margin-right: 20px;"
        ></i>
        <!-- <div class="divider"></div> -->
        <i class="far fa-clock icon-color"></i
        ><sup
          ><span
            class="badge icon-spacing icon-color"
            style="background-color: rgb(0, 174, 255); font-size: 0.6rem;"
            >6</span
          ></sup
        >
        <i class="fas fa-bell icon-color"></i
        ><sup
          ><span
            class="badge icon-spacing icon-color"
            style="background-color: red; font-size: 0.6rem;"
            >12</span
          ></sup
        >
        <i class="fas fa-user-circle icon-spacing icon-color"></i>
        <span class="icon-spacing icon-color">Steve Rodgers</span>
        <i class="fas fa-caret-down icon-spacing icon-color"></i>
      </div>
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
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  background-color: #121212;
  color: #eeeeee;
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

.icon-spacing {
  margin-right: 10px;
  font-size: 1.2rem;
}

.icon-color {
  color: #eeeeee;
}
</style>
