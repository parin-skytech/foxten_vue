<template>
  <nav class="nav navbar-dark navbar-expand-sm bg-dark">
    <!-- <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarWEX" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
    </button>-->
    <div class="navbar-collapse collapse flex-column mt-md-0 mt-4 pt-md-0 pt-4 align-middle">
      <!-- <a class="nav-link navbar-brand active" href="~/Views/Forms/ControlPanel.cshtml"><span class="fa fa-home"></span></a> -->
      <i class="fas fa-bars text-white"></i>
      <i class="fas fa-calendar-plus text-white mt-3"></i>
      <i class="fas fa-search text-white mt-2"></i>
      <i class="fas fa-user-friends text-white mt-2"></i>
      <i class="fas fa-cog text-white" style="margin-top: 400px;"></i>
      <i class="fas fa-exclamation text-white mt-2"></i>
      <i class="fas fa-question-circle text-white mt-2"></i>
    </div>
  </nav>
  <!-- <div id="sidebar">
    <span style="position: relative; top: 3%;">
      <i class="fas fa-bars sidebar-icon"></i>
    </span>
    <span style="position: relative; top: 10%;">
      <i class="far fa-calendar-plus sidebar-icon"></i>
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
    <span style="position: relative; top: 67%; margin-left: 8px;">
      <i class="fas fa-exclamation sidebar-icon"></i>
    </span>
    <span style="position: relative; top: 70%;">
      <i class="fas fa-question-circle sidebar-icon"></i>
      <br />
    </span>
  </div>-->
</template>


<style scoped>
/* #sidebar {
  width: 50px;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  background-color: #121212;
  color: #eeeeee;
} */

.sidebar-icon {
  color: #eeeeee;
  font-size: 1.3rem;
  margin-left: 7px;
}

.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}
</style>

<script>
export default {
  data: function() {
    var break_arr = [];
    for (var it = 0; it < 15; it++) {
      break_arr.push(it);
    }

    return {
      break_arr: break_arr
    };
  },
  name: "ray-sidebar",
  props: ["msg"],
  // template: template,
  mounted: function() {}
};
</script>