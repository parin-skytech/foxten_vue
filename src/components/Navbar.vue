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
        <b-button variant="link" v-b-modal.upload-modal
          ><i
            class="fas fa-upload icon-spacing icon-color"
            style="cursor: pointer;"
          ></i
        ></b-button>
        <i
          class="fas fa-sign-out-alt icon-color"
          style="margin-right: 20px;"
        ></i>
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

    <!-- Modal -->
    <b-modal
      id="upload-modal"
      title-html="<i class='fas fa-upload'></i>&nbsp;Upload"
      size="lg"
      header-class="modal-style"
      body-class="modal-style"
      hide-footer="true"
    >
      <div
        style="display: flex; flex-direction: row; justify-content: space-between"
      >
        <div>
          <b-button
            style="background-color: #43b7e9"
            onclick="document.getElementById('file').click()"
          >
            <span style="color: black;"
              ><i class="fas fa-file-alt"></i>&nbsp;CHOOSE A FILE</span
            >
          </b-button>
          <b-button style="background-color: #43b7e9; margin-left: 15px;"
            ><span style="color: black;"
              ><i class="fas fa-folder"></i>&nbsp;CHOOSE A FOLDER</span
            ></b-button
          >
          <input
            type="file"
            id="file"
            style="display: none;"
            v-on:change="handleFileInput($event.target.files)"
          />
        </div>
        <div>
          <p-button>
            <i class="fas fa-cog"></i>
          </p-button>
          <p-button style="margin-left: 15px;">
            <i class="fas fa-question-circle"></i>
          </p-button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="file">File(s)</label>
          <b-form-input
            style="background-color: #3c4043; color: #999999;"
            v-model="fileName"
            id="file"
          ></b-form-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="title">Title</label>
          <b-form-input
            style="background-color: #232b32; color: #999999"
            class="modal-input"
            id="title"
            placeholder="Title"
          ></b-form-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="comments">Comments / Text Input</label>
          <b-form-textarea
            style="background-color: #232b32; color: #999999"
            id="comments"
            rows="2"
            max-rows="6"
            placeholder="Enter text"
          ></b-form-textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="tags">Tags</label>
          <b-form-input
            style="background-color: #232b32; color: #999999"
            id="tags"
            placeholder="Tag with keyword(s)"
          ></b-form-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="dateOccurred">Date Occurred</label>
          <b-form-input
            style="background-color: #232b32; color: #999999"
            v-model="lastModifiedTime"
            id="dateOccurred"
          ></b-form-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="author">Author</label>
          <b-form-input
            v-model="text"
            id="author"
            style="background-color: #232b32; color: #999999"
          >
          </b-form-input>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <label for="coordinates">Coordinates (MGRS)</label>
          <b-form-textarea
            style="background-color: #232b32; color: #999999"
            id="corrdinates"
            v-model="text"
            rows="2"
            max-rows="6"
          ></b-form-textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <label for="classification">Classification</label>
          <select
            id=""
            class="form-control"
            style="background-color: #232b32; color: #999999"
          >
            <option value="default"></option>
          </select>
        </div>
        <div class="col-md-3 offset-md-2">
          <label for="classification">Owner/Producer</label>
          <select
            id=""
            class="form-control"
            style="background-color: #232b32; color: #999999"
          >
            <option value="default">USA</option>
          </select>
        </div>
      </div>
      <div class="row" style="margin-top: 10px;">
        <div class="col-md-6" style="margin-left: 10px;">
          <i class="fas fa-plus" style="color: white;"></i
          >&nbsp;&nbsp;&nbsp;<span style="color: white;"
            >DISSEMINATION CONTROLS</span
          >
        </div>
      </div>
      <div class="row" style="margin-top: 15px">
        <div class="col-md-2">
          <b-button style="background-color: #43b7e9;" @click="uploadFile">
            <span style="color: black;">UPLOAD</span>
          </b-button>
        </div>
        <div class="col-md-2">
          <b-button style="background-color: #121212; border: none;">
            <span style="color: #43b7e9;">CLEAR</span>
          </b-button>
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
