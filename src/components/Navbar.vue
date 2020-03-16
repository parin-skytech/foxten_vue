<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <img
        src="../assets/foxten_logo_2.svg"
        alt="FoxTEN logo"
        style="height:30px;width:30px"
        class="navbar-brand ml-5"
      />
      <a class="navbar-brand" href="#">FoxTen</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="my-2 my-lg-0 ml-auto" style="list-style: none; display: inline-flex;">
          <li class="mr-2">
            <i class="fas fa-columns icon-color"></i>
          </li>
          <li class="mr-2">
            <i class="fas fa-user-alt icon-color"></i>
          </li>
          <li class="mr-2" v-b-modal.upload-modal>
            <i class="fas fa-upload icon-color" style="cursor: pointer;"></i>
          </li>
          <li class="mr-2">
            <i class="far fa-clock icon-color"></i>
            <sup>
              <span
                class="badge icon-color"
                style="background-color: rgb(0, 174, 255); font-size: 0.6rem;"
              >6</span>
            </sup>
          </li>
          <li class="mr-2">
            <i class="fas fa-bell icon-color"></i>
            <sup>
              <span class="badge icon-color" style="background-color: red; font-size: 0.6rem;">12</span>
            </sup>
          </li>
          <li class="mr-2">
            <i class="fas fa-user-circle icon-color"></i>
          </li>
          <li class="mr-2">
            <span class="mr-2 icon-color">Steve Rodgers</span>
          </li>
          <li mr-2>
            <i class="fas fa-caret-down icon-color"></i>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Modal -->
    <b-modal
      id="upload-modal"
      title-html="<i class='fas fa-upload'></i>&nbsp;Upload"
      size="lg"
      header-class="modal-style"
      body-class="modal-style"
      hide-footer="true"
    >
      <!-- <div style="display: flex; flex-direction: row; justify-content: space-between"> -->
      <div class="d-flex flex-row justify-content-between">
        <div>
          <button class="btn modal-button" onclick="document.getElementById('file').click()">
            <i class="fas fa-file-alt"></i>&nbsp;CHOOSE A FILE
          </button>
          <button class="btn modal-button ml-3">
            <i class="fas fa-folder"></i>&nbsp;CHOOSE A FOLDER
          </button>
          <input
            type="file"
            id="file"
            style="display: none;"
            v-on:change="handleFileInput($event.target.files)"
          />
        </div>
        <div>
          <i class="fas fa-cog"></i>
          <i class="fas fa-question-circle ml-3"></i>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="file">File(s)</label>
          <input class="form-control modal-input" v-model="fileName" id="file" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="title">Title</label>
          <input class="form-control modal-input" id="title" placeholder="Title" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="comments">Comments / Text Input</label>
          <textarea
            class="form-control modal-input"
            id="comments"
            rows="2"
            max-rows="6"
            placeholder="Enter text"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="tags">Tags</label>
          <input class="form-control modal-input" id="tags" placeholder="Tag with keyword(s)" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="dateOccurred">Date Occurred</label>
          <input class="form-control modal-input" v-model="lastModifiedTime" id="dateOccurred" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="author">Author</label>
          <input v-model="text" id="author" class="form-control modal-input" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="coordinates">Coordinates (MGRS)</label>
          <textarea
            class="form-control modal-input"
            id="corrdinates"
            v-model="text"
            rows="2"
            max-rows="6"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <label for="classification">Classification</label>
          <select id class="form-control modal-input">
            <option value="default"></option>
          </select>
        </div>
        <div class="col-md-3 offset-md-2">
          <label for="classification">Owner/Producer</label>
          <select id class="form-control modal-input">
            <option value="default">USA</option>
          </select>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-md-6 ml-5">
          <i class="fas fa-plus" style="color: white;"></i>&nbsp;&nbsp;&nbsp;
          <span style="color: white;">DISSEMINATION CONTROLS</span>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-md-2">
          <button class="btn modal-button" @click="uploadFile">UPLOAD</button>
        </div>
        <div class="col-md-2">
          <button style="background-color: #121212; border: none;">
            <span style="color: #43b7e9;">CLEAR</span>
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ray-navbar",
  data: function() {
    return {
      fileToUpload: null,
      fileName: null,
      lastModifiedTime: null
    };
  },
  props: {
    msg: String,
    hideFooter: Boolean,
    text: String
  },
  methods: {
    handleFileInput: function(files) {
      this.fileToUpload = files[0];
      this.fileName = files[0].name;
      this.lastModifiedTime = new Date(files[0].lastModified).toString();
    },
    uploadFile: function() {
      var endpoint = "http://localhost:8081";
      var formData = new FormData();
      formData.append("file", this.fileToUpload, this.fileToUpload.name);
      // return this.http.post(endpoint, formData);
      this.$http.post(endpoint, formData).then(
        function(fileUploadSucess) {
          console.log("File was successfully uploaded", fileUploadSucess);
        },
        function(fileUploadFailed) {
          console.error("File upload failed", fileUploadFailed);
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* #navbar {
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
} */

.icon-color {
  color: #eeeeee;
}

#logo {
  margin-left: 80px;
  height: 40px;
  margin-top: 15px;
}
</style>
