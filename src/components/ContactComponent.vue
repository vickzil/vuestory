<template>
  <div class="contact">
    <div class="container">
      <div class="article">
        <div class="article-heading">
          <h3>Contact US</h3>
          <hr />
        </div>
        <p>
          If you have any question, comments and suggestions feel free to write
          us below. Your feedback is incredibly important to us.
        </p>
      </div>
      <form id="my-form" @submit.prevent="submitContactForm" novalidate="true">
        <div class="alert alert-success" v-if="successContactMessage">
          <p>
            Your Message was sent.
            <br />We will contact you shortly
          </p>
        </div>
        <ul class="alert alert-danger" v-if="contactErroes.length">
          <li
            class="text-danger pl-2"
            style="margin-left: 12px;"
            v-for="error in contactErroes"
            :key="error"
          >{{error}}</li>
        </ul>
        <div class="row">
          <div class="form-group col-md-6">
            <label for="fname" class="col-form-label">First Name</label>
            <input
              type="text"
              placeholder=" e.g John"
              class="form-control validate"
              id="fname"
              v-model="firstname"
            />
            <div class="helper-text" id="ferr"></div>
          </div>
          <div class="form-group col-md-6">
            <label for="lname" class="col-form-label">Last Name</label>
            <input
              type="text"
              placeholder=" e.g Doe"
              class="form-control validate"
              id="lname"
              v-model="lastname"
            />
            <div class="helper-text" id="lerr"></div>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-6">
            <label for="email" class="col-form-label">Your E-mail</label>
            <input
              type="email"
              placeholder=" johndoe@xyz.com"
              class="form-control validate"
              id="email"
              v-model="email"
            />
            <div class="helper-text" id="eerr"></div>
          </div>
          <div class="form-group col-md-6">
            <label for="phone" class="col-form-label">Phone</label>
            <input
              type="tel"
              placeholder="eg 0801234567"
              class="form-control validate"
              id="phone"
              v-model="phone"
            />
            <div class="helper-text" id="perr"></div>
          </div>
        </div>
        <div class="form-group">
          <p>Message</p>
          <textarea
            class="form-control"
            name="message"
            id="message"
            v-model="message"
            rows="6"
            placeholder="Your Message"
          ></textarea>
          <div class="helper-text" id="merr"></div>
          <div class="d-flex justify-content-center">
            <input
              type="submit"
              class="btn btn-secondary mt-4 text-center"
              id="submitform"
              value="Submit"
              name="submitform"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactComponent",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
      contactErroes: [],
      Erros: false,
      successContactMessage: false
    };
  },
  methods: {
    submitContactForm() {
      // Validate all form inputs

      // remove all errors and messages
      this.contactErroes = [];
      this.successContactMessage = false;

      // send error message if fields are empty
      if (!this.firstname) {
        this.contactErroes.push("First name is required");
        return false;
      }
      if (!this.lastname) {
        this.contactErroes.push("Last name is required");
        return false;
      }
      if (!this.email) {
        this.contactErroes.push("E-mail is required");
        return false;
      }

      if (!this.validEmail(this.email)) {
        this.contactErroes.push("Valid email is required");
        return false;
      }

      if (!this.phone) {
        this.contactErroes.push("Phone number is required");
        return false;
      }

      if (isNaN(this.phone)) {
        this.contactErroes.push("Phone number must be number");
        return false;
      }

      if (!this.message) {
        this.contactErroes.push("Please fill out your message");
        return false;
      } else {
        // send form if fields are not empty
        this.successContactMessage = true;
        // clear error messages
        this.contactErroes = [];
        this.clearFormMsg();
        // remove success message after 8seconds
        setTimeout(() => (this.successContactMessage = false), 8000);
        return true;
      }
    },

    // email validation
    validEmail: function(email) {
      var emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailReg.test(email);
    },
    clearFormMsg() {
      this.firstname = "";
      this.lastname = "";
      this.email = "";
      this.phone = "";
      this.message = "";
    }
  }
};
</script>

<style>
</style>