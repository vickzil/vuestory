/* eslint no-mixed-spaces-and-tabs: "error", "smart-tabs"] */ /* jslint
smarttabs: true */
<template>
  <div>
    <!-- show overlay background and form modal if add story button is clicked -->
    <transition name="fade">
      <div id="overlay" v-if="showAddModal" tabindex="-1">
        <!-- close overlay and form modal -->
        <div
          id="overlay-close"
          @click="
            showAddModal = false;
            clearMsg();
          "
        ></div>
        <!-- form modal -->
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h3>Add Your Story</h3>
              <button type="submit" class="close" @click="showAddModal = false">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body px-4">
              <p class="errors my-4">{{ errors }}</p>
              <form v-on:submit.prevent="postStory">
                <div class="row mb-4">
                  <div class="form-group col-md-6">
                    <input
                      type="text"
                      v-model.trim="stori.firstname"
                      placeholder="First name"
                      class="form-control validate"
                    />
                  </div>

                  <div class="form-group col-md-6">
                    <input
                      type="text"
                      v-model.trim="stori.lastname"
                      placeholder="Last name"
                      class="form-control validate"
                    />
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="form-group col-md-6">
                    <input
                      type="text"
                      v-model.trim="stori.username"
                      placeholder="Username"
                      class="form-control validate"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <select
                      class="form-control"
                      v-model="stori.gender"
                      id="gender"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="form-group col-md-12">
                    <input
                      type="text"
                      v-model.trim="stori.headline"
                      id="headline"
                      placeholder="headline"
                      class="form-control validate"
                    />
                  </div>
                </div>

                <div class="row mb-4">
                  <div class="form-group col-md-12">
                    <textarea
                      v-model.trim="stori.message"
                      class="form-control"
                      rows="6"
                      placeholder="Your story"
                    ></textarea>
                  </div>
                  <div class="form-group float-right">
                    <input
                      type="submit"
                      class="btn btn-secondary ml-4 btn-block btn-sm"
                      value="Add Story"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Call to action button which activates overlay and add story form modal -->
    <div class="cta">
      <a
        class="btn-floating btn-large waves-effect waves-light green"
        @click="showAddModal = true"
        >Add +</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "AddStory",
  data() {
    return {
      showAddModal: false,
      errors: null,
      stori: {
        firstname: "",
        lastname: "",
        username: "",
        like: 0,
        toggleLike: false,
        readMore: false,
        gender: "Male",
        className: "is-black",
        headline: "",
        message: ""
      }
    };
  },

  methods: {
    // clear all input fields
    clearMsg() {
      this.errors = null;
      this.successMsg = false;
      this.stori.firstname = "";
      this.stori.lastname = "";
      this.stori.username = "";
      this.stori.like = 0;
      this.stori.headline = "";
      this.stori.message = "";
    },
    postStory() {
      // check if all input fields are empty

      if (!this.stori.firstname) {
        this.errors = "First name is required";

        return false;
      }

      if (this.stori.firstname.length < 3) {
        this.errors = "First Name should contain at least 3 letters";

        return false;
      }

      if (!this.stori.lastname) {
        this.errors = "Last Name is required";

        return false;
      }

      if (this.stori.lastname.length < 3) {
        this.errors = "last Name should contain at least 3 letters";

        return false;
      }

      if (!this.stori.username) {
        this.errors = "Username is required";

        return false;
      }

      if (!this.stori.gender) {
        this.errors = "choose your Gender";

        return false;
      }

      if (!this.stori.headline) {
        this.errors = "Headline is required";

        return false;
      }

      if (this.stori.headline.length < 10) {
        this.errors = "Headline should contain at least ten letters";

        return false;
      }

      if (!this.stori.message) {
        this.errors = "Your Story is required";

        return false;
      }

      if (this.stori.message.length < 150) {
        this.errors = "Story should contain at least 150 letters";

        return false;
      } else {
        /* if input fields are not empty, then clear all errors 
      and use $emit event to push the story input to the stories component stories array
        */
        this.showAddModal = false;
        const newStory = this.stori;
        this.$emit("add-story", newStory);

        // clear all input fields

        this.clearMsg();
      }
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25 ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  transition: 800ms ease;
  z-index: 1000;
  overflow: auto;
  width: 100%;
  cursor: pointer;
}

#overlay::-webkit-scrollbar {
  width: 0px;
  background: #777;
}

#overlay-close {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  transition: 800ms ease;
  z-index: 1000;
  overflow: auto;
  width: 100%;
  cursor: pointer;
}

#overlay-close::-webkit-scrollbar {
  width: 0px;
}

.modal-dialog {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: 800ms ease;
  z-index: 2000;
  overflow: auto;
  width: 100%;
}

#overlay-close::-webkit-scrollbar {
  width: 0px;
}

.modal-dialoge::-webkit-scrollbar {
  width: 0px;
}
</style>
