<template>
  <div id="sidebar">
    <span style="position: relative; top: 3%;">
      <i class="fas fa-bars sidebar-icon"></i>
    </span>
    <span style="position: relative; top: 10%;"
      ><i class="far fa-calendar-plus sidebar-icon"></i>
    </span>
    <span style="position: relative; top: 13%;">
      <i class="fas fa-search sidebar-icon"></i>
    </span>
    <span style="position: relative; top: 20%;">
      <i class="fas fa-user-friends sidebar-icon"></i>
    </span>
    <span style="position: relative; top: 64%;">
      <i class="fas fa-cog sidebar-icon"></i>
    </span>
    <span style="position: relative; top: 67%;">
      <i class="fas fa-exclamation sidebar-icon"></i>
    </span>
    <span style="position: relative; top: 70%;">
      <i class="fas fa-question-circle sidebar-icon"></i><br />
    </span>
  </div>
</template>

<script></script>

<style scoped>
#sidebar {
  width: 50px;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  background-color: #121212;
  color: #eeeeee;
}

.sidebar-icon {
  color: #eeeeee;
  font-size: 1.3rem;
  margin-left: 7px;
}
</style>
