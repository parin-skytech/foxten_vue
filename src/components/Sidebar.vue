<template>
  <div>
    <nav class="nav navbar-dark navbar-expand-sm bg-dark">
      <!-- <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarWEX" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
      </button>-->
      <div
        class="navbar-collapse collapse d-flex flex-column mt-md-0 mt-4 pt-md-0 pt-4 justify-content-around"
      >
        <!-- <a class="nav-link navbar-brand active" href="~/Views/Forms/ControlPanel.cshtml"><span class="fa fa-home"></span></a> -->
        <ul style="list-style: none;" class="p-2">
          <li>
            <i class="fas fa-bars text-white"></i>
          </li>
          <li>
            <i class="fas fa-calendar-plus text-white mt-3"></i>
          </li>
          <li>
            <i class="fas fa-search text-white mt-2"></i>
          </li>
          <li v-b-modal.admin-modal style="cursor: pointer;" title="Administrator">
            <i class="fas fa-user-friends text-white mt-2" style="cursor: pointer;"></i>
          </li>
        </ul>
        <ul style="list-style: none; margin-top: 400px;" class="p-2">
          <li v-b-modal.userSettings-modal style="cursor: pointer;" title="User settings">
            <i class="fas fa-cog text-white"></i>
          </li>
          <li v-b-modal.feedback-modal style="cursor: pointer;" title="Feedback form">
            <i class="fas fa-exclamation-circle text-white mt-2"></i>
          </li>
          <li v-b-modal.help-modal style="cursor: pointer;" title="Help">
            <i class="fas fa-question-circle text-white mt-2"></i>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Administrator modal -->
    <b-modal
      id="admin-modal"
      title="Administration"
      size="xl"
      header-class="modal-style"
      body-class="modal-style"
      hide-footer="true"
    >
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-12">
              <h4>SECURITY Admin</h4>
            </div>
            <div class="col-md-9 offset-md-3">
              <ul style="list-style: none;" class="p-0">
                <li class="ray-text">Users</li>
                <li class="ray-text">Roles</li>
                <li class="ray-text">Classification Rules</li>
                <li class="ray-text">Assign Feature Users/Features</li>
              </ul>
            </div>
            <div class="col-md-12">
              <h4>LOGGING and Services Admin</h4>
            </div>
            <div class="col-md-9 offset-md-3">
              <ul style="list-style: none;" class="p-0">
                <li class="ray-text">Logging configuration</li>
                <li class="ray-text">Logging dashboard</li>
                <li>Services</li>
                <ul style="list-style: none;">
                  <li class="ray-text">Configuration</li>
                  <li class="ray-text">Viewer</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-12">
            <h4>DATA Admin</h4>
          </div>
          <div class="col-md-9 offset-md-3">
            <ul style="list-style: none;" class="p-0">
              <li>Data Fabric</li>
              <ul style="list-style: none;">
                <li class="ray-text">Ingestion Configuration</li>
                <li class="ray-text">Ingestion Metrics Dashboard</li>
                <li class="ray-text">Data Model Configuration</li>
                <li class="ray-text">Symbology Settings</li>
                <li class="ray-text">Data Browser Viewer/Editor/Reviewer</li>
              </ul>
            </ul>
          </div>
          <div class="col-md-12">
            <h4>Reference Data</h4>
          </div>
          <div class="col-md-9 offset-md-3">
            <ul style="list-style: none;" class="p-0">
              <li>Data Fabric</li>
              <ul style="list-style: none;">
                <li class="ray-text">WEG Data Dashboard</li>
                <li class="ray-text">Weather Data Settings</li>
                <li class="ray-text">Terrain Data Settings</li>
                <li class="ray-text">Map Data Settings</li>
                <li class="ray-text">Other Data Lookup Settings</li>
              </ul>
            </ul>
          </div>
          <div class="col-md-12">
            <h4>SYSTEM Admin</h4>
          </div>
          <div class="col-md-9 offset-md-3">
            <ul style="list-style: none;" class="p-0 mb-0">
              <li>UI</li>
              <ul style="list-style: none;">
                <li class="ray-text">Dashboard Settings</li>
                <li class="ray-text">Properties</li>
              </ul>
            </ul>
            <ul style="list-style: none;" class="p-0 mb-0">
              <li>GIS</li>
              <ul style="list-style: none;">
                <li class="ray-text">Core ESRI Map Settings</li>
                <li class="ray-text">Geo Code Settings</li>
              </ul>
            </ul>
            <ul style="list-style: none;" class="p-0 mb-0">
              <li>Link Analyis</li>
              <ul style="list-style: none;">
                <li class="ray-text">Settings Dashboard</li>
              </ul>
            </ul>
            <ul style="list-style: none;" class="p-0 mb-0">
              <li>Alerts</li>
              <ul style="list-style: none;">
                <li class="ray-text">Settings</li>
                <li class="ray-text">Viewer</li>
              </ul>
            </ul>
            <ul style="list-style: none;" class="p-0 mb-0">
              <li>Reports</li>
              <ul style="list-style: none;">
                <li class="ray-text">Settings</li>
                <li class="ray-text">Viewer</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </b-modal>

    <!-- Help modal -->
    <b-modal
      id="help-modal"
      title="Help Context Hot Links"
      size="xl"
      header-class="modal-style"
      body-class="modal-style"
      hide-footer="true"
    >
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-12">
              <h4>User Discovery Help Section</h4>
            </div>
            <div class="col-md-9 offset-md-3">
              <ul style="list-style: none;" class="p-0">
                <li>
                  <a href="http://www.raytheon.com" class="ray-text" target="_blank">Mapping</a>
                </li>
                <li class="ray-text">
                  <a href="http://www.raytheon.com" class="ray-text" target="_blank">Link Analytics</a>
                </li>
                <li class="ray-text">
                  <a href="http://www.raytheon.com" class="ray-text" target="_blank">Tabular</a>
                </li>
                <li class="ray-text">
                  <a href="http://www.raytheon.com" class="ray-text" target="_blank">Editor</a>
                </li>
                <li class="ray-text">
                  <a href="http://www.raytheon.com" class="ray-text" target="_blank">Alerts</a>
                </li>
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >Full Text Search</a>
                </li>
                <li class="ray-text">
                  <a href="http://www.raytheon.com" class="ray-text" target="_blank">Saved Search</a>
                </li>
                <li class="ray-text">
                  <a href="http://www.raytheon.com" class="ray-text" target="_blank">History...</a>
                </li>
              </ul>
            </div>
            <div class="col-md-12">
              <h4>Pattern Dashboard Help Section</h4>
            </div>
            <div class="col-md-9 offset-md-3">
              <ul style="list-style: none;" class="p-0">
                <li class="ray-text">
                  <a href="http://www.raytheon.com" class="ray-text" target="_blank">MCOO</a>
                </li>
                <li class="ray-text">
                  <a href="http://www.raytheon.com" class="ray-text" target="_blank">IPB</a>
                </li>
                <li class="ray-text">
                  <a href="http://www.raytheon.com" class="ray-text" target="_blank">COA...</a>
                </li>
              </ul>
            </div>
            <div class="col-md-12">
              <h4>SECURITY Admin Help Section</h4>
            </div>
            <div class="col-md-9 offset-md-3">
              <ul style="list-style: none;" class="p-0">
                <li class="ray-text">
                  <a href="http://www.raytheon.com" class="ray-text" target="_blank">Users</a>
                </li>
                <li class="ray-text">
                  <a href="http://www.raytheon.com" class="ray-text" target="_blank">Roles</a>
                </li>
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >Classification Rules</a>
                </li>
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >Assign Feature Users/Features</a>
                </li>
              </ul>
            </div>
            <div class="col-md-12">
              <h4>LOGGING and Services Admin Help Section</h4>
            </div>
            <div class="col-md-9 offset-md-3">
              <ul style="list-style: none;" class="p-0">
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >Logging Configuration</a>
                </li>
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >Logging Dashboard</a>
                </li>
                <li>Services</li>
                <ul style="list-style: none;">
                  <li class="ray-text">
                    <a href="http://www.raytheon.com" class="ray-text" target="_blank">Configuration</a>
                  </li>
                  <li class="ray-text">
                    <a href="http://www.raytheon.com" class="ray-text" target="_blank">Viewer</a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="col-md-12">
            <h4>DATA Admin Help Section</h4>
          </div>
          <div class="col-md-9 offset-md-3">
            <ul style="list-style: none;" class="p-0">
              <li>Data Fabric</li>
              <ul style="list-style: none;">
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >Ingestion Configuration</a>
                </li>
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >Ingestion Metrics Dashboard</a>
                </li>
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >Data Model Configuration</a>
                </li>
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >Symbology Settings</a>
                </li>
              </ul>
            </ul>
            <ul style="list-style: none;" class="p-0">
              <li>Reference Data</li>
              <ul style="list-style: none;">
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >WEG Data Dashboard</a>
                </li>
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >Weather Data Settings</a>
                </li>
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >Terrain Data Settings</a>
                </li>
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >Map Data Settings</a>
                </li>
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >Other Data Lookup Settings</a>
                </li>
              </ul>
            </ul>
          </div>
          <div class="col-md-12">
            <h4>SYSTEM Admin</h4>
          </div>
          <div class="col-md-9 offset-md-3">
            <ul style="list-style: none;" class="p-0 mb-0">
              <li>QLIK UI</li>
              <ul style="list-style: none;">
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >Dashboard Settings</a>
                </li>
              </ul>
            </ul>
            <ul style="list-style: none;" class="p-0 mb-0">
              <li>GIS</li>
              <ul style="list-style: none;">
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >Core ESRI Map Settings</a>
                </li>
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >Geo Code Settings</a>
                </li>
              </ul>
            </ul>
            <ul style="list-style: none;" class="p-0 mb-0">
              <li>Link Analyis</li>
              <ul style="list-style: none;">
                <li class="ray-text">
                  <a
                    href="http://www.raytheon.com"
                    class="ray-text"
                    target="_blank"
                  >Settings Dashboard</a>
                </li>
              </ul>
            </ul>
            <ul style="list-style: none;" class="p-0 mb-0">
              <li>Alerts</li>
              <ul style="list-style: none;">
                <li class="ray-text">
                  <a href="http://www.raytheon.com" class="ray-text" target="_blank">Settings</a>
                </li>
                <li class="ray-text">
                  <a href="http://www.raytheon.com" class="ray-text" target="_blank">Viewer</a>
                </li>
              </ul>
            </ul>
            <ul style="list-style: none;" class="p-0 mb-0">
              <li>Reports</li>
              <ul style="list-style: none;">
                <li class="ray-text">
                  <a href="http://www.raytheon.com" class="ray-text" target="_blank">Settings</a>
                </li>
                <li class="ray-text">
                  <a href="http://www.raytheon.com" class="ray-text" target="_blank">Viewer</a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </b-modal>
    <!-- <b-modal
      id="help-modal"
      title="Help Context Hot Links"
      size="xl"
      header-class="modal-style"
      body-class="modal-style"
      hide-footer="true"
    >
      <div class="row">
        <div class="col-md-6">
          <div class="row">
            <div v-for="link in helpLinks" v-bind:key="link">
              <div class="col-md-12">
                <h4>{{link.sectionName}}</h4>
              </div>
              <div class="col-md-9 offset-md-3">
                <ul style="list-style: none;" class="p-0">
                  <li
                    class="ray-text"
                    v-for="sectionInfo in link.sections"
                    v-bind:key="sectionInfo.name"
                  >
                    <a :href="sectionInfo.link" target="_blank">{{sectionInfo.name}}</a>
                  </li>
                  <div v-if="sectionInfo.subSections">
                    <li
                      v-for="subSectionInfo in sectionInfo.subSections"
                      v-bind:key="subSectionInfo.subSectionName"
                    >{{subSectionInfo.subSectionName}}</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>-->

    <!-- Feedback modal -->
    <b-modal
      id="feedback-modal"
      title="Provide Feedback"
      size="lg"
      header-class="modal-style"
      body-class="modal-style"
      hide-footer="true"
    >
      <form id="feedbackForm">
        <div class="form-group row">
          <label for="description" class="col-sm-3 col-form-label">Description</label>
          <div class="col-sm-9">
            <textarea class="form-control" name="description" id="description" rows="3"></textarea>
          </div>
        </div>
        <div class="form-group row">
          <label for="foxTenComponent" class="col-sm-3 col-form-label">FoxTEN Component</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" name="foxTenComponent" id="foxTenComponent" />
          </div>
        </div>
        <div class="form-group row">
          <label for="feedbackType" class="col-sm-3 col-form-label">Type of Feedback</label>
          <div class="col-sm-9">
            <select name id class="form-control"></select>
          </div>
        </div>
        <div class="form-group row">
          <label for="attachments" class="col-sm-3 col-form-label">Attachments</label>
          <div class="col-sm-9">
            <textarea class="form-control" name="attachments" id="attachments" rows="3"></textarea>
          </div>
        </div>
        <div class="form-group row">
          <label for="requestorOrgnization" class="col-sm-3 col-form-label">Your Organization</label>
          <div class="col-sm-9">
            <input
              type="text"
              class="form-control"
              name="requestorOrgnization"
              id="requestorOrgnization"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="priority" class="col-sm-3 col-form-label">Priority</label>
          <div class="col-sm-9">
            <select name id class="form-control">
              <option value="default">Select priority...</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="email" class="col-sm-3 col-form-label">Email</label>
          <div class="col-sm-9">
            <input type="email" class="form-control" name="email" id="email" />
          </div>
        </div>
        <div class="form-group row">
          <label for="phone" class="col-sm-3 col-form-label">Phone</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" name="phone" id="phone" />
          </div>
        </div>
        <div class="form-group row">
          <label for="isCurrentCustomer" class="col-sm-3 col-form-label">Current Customer</label>
          <div class="col-sm-9">
            <select name id class="form-control">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="customerNumber" class="col-sm-3 col-form-label">Customer Number</label>
          <div class="col-sm-9">
            <input type="text" class="form-control" name="customerNumber" id="customerNumber" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 offset-md-5">
            <button class="btn modal-button btn-block" @click.prevent="submitForm()">Submit</button>
          </div>
        </div>
      </form>
    </b-modal>

    <!-- User settings modal -->
    <b-modal
      id="userSettings-modal"
      title="User Centric Settings Dashboard"
      size="lg"
      header-class="modal-style"
      body-class="modal-style"
      hide-footer="true"
    >
      <div class="row">
        <div class="col-md-6">
          <ul style="list-style: none;" class="p-0">
            <li class="ray-text">Named Areas of Interest</li>
            <li class="ray-text">Default Named area of interest filters</li>
            <li class="ray-text">Define time range filter</li>
            <li class="ray-text">Classification level (non editable based AD) filters</li>
            <li class="ray-text">Dark or Light theme for Dashboard</li>
            <li class="ray-text">Dashboard components on/off defaults</li>
            <li class="ray-text">History of searches</li>
            <li class="ray-text">Saved results</li>
            <li class="ray-text">Collaboration groups</li>
            <li class="ray-text">Pending Edits</li>
            <li class="ray-text">Uploaded document names</li>
            <li class="ray-text">Report generated names and templates</li>
          </ul>
        </div>
        <div class="col-md-6">
          <input type="text" class="form-control" placeholder="Search Settings" />
          <textarea name id cols="30" rows="10" class="form-control mt-3"></textarea>
        </div>
      </div>
    </b-modal>
  </div>

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
    // var break_arr = [];
    // for (var it = 0; it < 15; it++) {
    //   break_arr.push(it);
    // }

    return {
      // break_arr: break_arr
      helpLinks: []
    };
  },
  methods: {
    submitForm: function() {
      var endpoint = "http://localhost:8081/submitFeedback";
      var feedbackFormData = new FormData(
        document.getElementById("feedbackForm")
      );

      this.$http.post(endpoint, feedbackFormData).then(
        function() {
          this.$bvToast.toast(`Feedback was succssfully sent`, {
            title: "Feeback",
            autoHideDelay: 5000,
            appendToast: false
          });
          this.$bvModal.hide("feedback-modal");
        },
        function() {}
      );
    },
    getHelpLinks: function() {
      this.$http
        .get("http://localhost:8081/helpLinks")
        .then(function(response) {
          return response.json();
        })
        .then(function(helpLinks) {
          const resultsArray = [];
          for (let key in helpLinks) {
            resultsArray.push(helpLinks[key]);
          }
          this.helpLinks = resultsArray;
          console.log(this.helpLinks);
        });
    }
  },
  beforeMount() {
    this.getHelpLinks();
  },
  name: "ray-sidebar",
  props: ["msg"],
  // template: template,
  mounted: function() {}
};
</script>