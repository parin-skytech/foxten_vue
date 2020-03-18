<template>
  <div id="app">
    <div class="container-fluid bg-dark">
      <div class="row">
        <div class="col px-0">
          <ray-navbar></ray-navbar>
        </div>
      </div>
      <div class="row">
        <div
          class="col-1 col-sm-2 col-md-2 col-lg-1 col-xl-1 p-0"
          style="width: 4.166667%;
    flex: 0 0 4.166667%;max-width: 4.166667%;"
        >
          <ray-sidebar></ray-sidebar>
        </div>
        <div class="col-11 col-sm-10 col-md-10 col-lg-11 col-xl-11 bg-dark">
          <div class="row">
            <div class="col-md-12 pr-1 px-1">
              <div id="CurrentSelections" class></div>
            </div>
          </div>
          <!-- <div class="row">
            <div class="col-md-6 px-1" style="height:900px;">
              <div class="card bg-dark border-secondary">
                <div class="card-body p-0">
                  <div id="map-area">Map area</div>
                </div>
              </div>
            </div>
            <div class="col-md-6 px-1" style="height: 900px;">
              <div class="row">
                <div class="col">
                  <div v-show="true" id="messenger_ext">Messenger</div>
                </div>
              </div>
              <div class="row">
                <div class="col"></div>
              </div>
            </div>
          </div>-->
          <div class="row">
            <div class="col-md-6 px-1">
              <iframe
                src="https://www.arcgis.com/home/webscene/viewer.html?webscene=91b46c2b162c48dba264b2190e1dbcff"
                id="map"
                height="850"
                style="width: 100%; margin-bottom: 57px;"
              ></iframe>
            </div>
            <div class="col-md-6 px-1">
              <iframe
                src="http://localhost:4848/single/?appid=C%3A%5CUsers%5Cpgand%5CDocuments%5CQlik%5CSense%5CApps%5CTED%20Demo.qvf&sheet=4cec9a2d-a236-4d45-a1c6-6dc03697ddc4&opt=ctxmenu,currsel"
                height="850"
                style="width: 100%; margin-bottom: 57px;"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.ray-btn-primary {
  background-color: #43b7e9;
  color: #eeeeee;
} */

html,
body {
  height: 100%;
}

body {
  min-height: 100%;
}

.modal-style {
  background-color: #121212;
  color: #eeeeee;
}

.modal-input {
  background-color: #232b32 !important;
  color: #999999 !important;
}

.modal-button {
  background-color: #43b7e9 !important;
  color: #121212;
}

.ray-text {
  color: #43b7e9;
}

body {
  background-color: #343a40;
}
</style>
