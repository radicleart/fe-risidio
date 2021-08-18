<template>
<div class="container">
<div id="ContactSection" class="py-2 contact-section">
  <confirmation-modal class="container text-dark" v-if="showModal" :modal="showModal" :title="modalTitle" :content="modalContent" @closeModal="closeModal"/>
  <section class="px-0">
    <div class="row">
      <div class="">
        <h2 class="large-title mb-5">{{title}}</h2>
        <p v-html="featureMessage"></p>
      </div>
      <div class="container1">
    <b-container class="container12"></b-container></div>
      <div class="col-md-12">
        <div class="col-md-12">
          <b-link to="/" class="navbar-brand" v-if="logo"><img :src="logo" alt="Radicle logo" class="img-fluid"></b-link>
        </div>
        <div class="col-md-12">
          <h4 class="my-5">Any thought, questions, just want to say hello?</h4 >
          <h5 class="my-4"><strong>Contact Us</strong></h5>
        </div>
          <span></span>
              </div>
      <div class="contact-form">
        <b-form class="needs-validation form-transparent" novalidate @submit="checkForm" id="contact-form">
          <b-container class="text-input11">
            <b-row >
              <b-col cols="6">
          <b-form-group>
            <b-form-input class="forn-input4"
              prepend="@"
              id="validation-name"
              v-model="name"
              type="text"
              :placeholder="'Your name..'"
            ></b-form-input>
            <b-form-invalid-feedback>
              Please enter your email - it's not stored - just used to reply..
            </b-form-invalid-feedback>
          </b-form-group>
           </b-col>
     <b-col cols="6">
          <b-form-group>
            <b-form-input class="forn-input4"
              prepend="@"
              id="validation-email"
              v-model="email"
              type="text"
              :placeholder="'Email address..'"
              required
            ></b-form-input>
            <b-form-invalid-feedback>
              Please enter your email - it's not stored - just used to reply..
            </b-form-invalid-feedback>
          </b-form-group>
          </b-col>
            </b-row>
          <b-form-group>
            <b-form-input class="forn-input4"
              prepend="@"
              id="validation-subject"
              v-model="subject"
              type="text"
              :placeholder="'Subject..'"
            ></b-form-input>
          </b-form-group>

          <b-form-group>
            <b-form-textarea
              class="form-control"
              id="validation-message"
              placeholder="How can we help..."
              v-model="message"
              required>
            </b-form-textarea>
            <b-form-invalid-feedback>
              Please tell us how we can help!
            </b-form-invalid-feedback>
          </b-form-group>
</b-container>
          <b-button class="bb">Send</b-button>
        </b-form>
      </div>
      <div class="row">
      </div>
    </div>
  </section>
  </div>
  </div>
</template>

<script>
import ConfirmationModal from './ConfirmationModal'

export default {
  name: 'ContactSection',
  components: {
    ConfirmationModal
  },
  props: ['featureMessage'],
  data () {
    return {
      title: '',
      name: '',
      subject: '',
      email: null,
      message: null,
      description: 'Please get in touch with any questions you have about the platform.',
      fields: [],
      buttonText: null,
      // logo: 'img/logo/logo-black-256x256.png',
      showModal: false,
      modalTitle: 'Sent Message',
      modalContent: '<p>Thanks for your interest - your message has been sent.</p>'
    }
  },
  mounted () {
    const profile = this.$store.getters['myAccountStore/getMyProfile']
    this.profile = profile
  },
  methods: {
    upload () {
      const email = {
        text: this.message,
        subject: this.subject,
        originatorEmail: this.email,
        originatorName: this.name
      }
      this.$store.dispatch('contentStore/sendContactEmail', email)
      this.showModal = true
    },
    checkForm (event) {
      if (event) {
        event.preventDefault()
        event.target.classList.add('was-validated')
      }
      this.errors = []
      if (!this.name) {
        this.errors.push('Please enter a name.')
      }
      if (!this.subject) {
        this.subject = 'General enquiry'
      }
      if (!this.email) {
        this.errors.push('Please enter a email.')
      }
      if (!this.message) {
        this.errors.push('Please enter a message.')
      }
      if (this.errors.length > 0) {
        return false
      } else {
        this.upload()
      }
    },
    closeModal: function () {
      this.showModal = false
    }
  },
  computed: {
    myProfile () {
      let profile = this.$store.getters['myAccountStore/getMyProfile']
      if (!profile) {
        profile = {
          username: 'anon'
        }
      }
      return profile
    }
  }
}
</script>

<style>
.raised  {
  border-radius: 10px;
  position: relative;
  top: 35px;
  margin-bottom: 50px;
}
.contact-form .md-form label,
.contact-form .md-form textarea ~ label.active {
  color: inherit!important;
  text-transform: uppercase;
  letter-spacing: 0.5px;

}
.submit {
  border: none;
}
.contact-form .form-control {
  color: inherit;
  font-weight: normal;
}

  .contact-form .submit {
    cursor: pointer;
  }
</style>
<style scoped>
.form-control {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.245) 0% 0% no-repeat padding-box;
}
  .md-form {
    margin-top: 0.7rem;
    margin-bottom: 0.7rem;
  }
.copyright {
  font-size: 0.7rem;
}
.bb{
border-radius: 100px;
width: 200px;
text-align: centre;
   width: 100%;
  position: relative;
  left: 0;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px;
    width: 141px;
  height: 43px;
  background: rgb(255, 255, 255, .2) 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 22px;
}
.bb {
  color: #5FBDC1;
}
 .contact-form{
  min-height:20vh;
  position:relative;
  z-index:999;
  font-size: 14px;
  margin: 0 auto;
  width: 918px;
}
.col-md-12 .my-4{
  width: 500px;
  position:relative;
  z-index:999;
  font-size: 50px;
  margin: 0 auto;
  padding: 10px 16px;
  width: 918px;
  border-top-left-radius: 10px 10px;
  -moz-border-top-left-radius: 10px 10px;
  border-top-right-radius: 10px 10px;
  -moz-border-top-right-radius: 10px 10px;
  color: white;
 text-align: centre;
  width: 100%;
}
.my-5{
   width: 500px;
  position:relative;
  z-index:999;
  font-size: 25px;
  margin: 0 auto;
  padding: 10px 16px;
  width: 918px;
  border-top-left-radius: 10px 10px;
  -moz-border-top-left-radius: 10px 10px;
  border-top-right-radius: 10px 10px;
  -moz-border-top-right-radius: 10px 10px;
  color: white;
 text-align: 0 centre;
  width: 100%;
}
.d-flex .align-items-center .flex-column .my-5{
  color: blueviolet;
}
.container {
  background-color: blueviolet;
  text-align: center;
}
.container12{
   width: 100%;
  position: relative;
  left: 0;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: black solid 1px;
}
.forn-input4 {
border-radius: 100px;
}
</style>
