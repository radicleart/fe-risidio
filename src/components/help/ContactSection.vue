<template>
<div class="container">
<div id="ContactSection" class="py-2 contact-section">
  <confirmation-modal class="container text-dark" v-if="showModal" :modal="showModal" :title="modalTitle" :content="modalContent" @closeModal="closeModal"/>
  <section class="px-0">
    <div class="row">
      <div class="col-12">
        <h2 class="large-title mb-5">{{title}}</h2>
        <p v-html="featureMessage"></p>
      </div>
      <div class="col-md-5">
        <div class="col-md-12">
          <b-link to="/" class="navbar-brand" v-if="logo"><img :src="logo" alt="radicle logo" class="img-fluid"></b-link>
        </div>
        <div class="col-md-12">
          <h5 class="my-4"><strong>Contact Info</strong></h5>
          <p>The Fusebox, Brighton, BN1 4GH, UK</p>
          <p>Email: info@risidio.com</p>
        </div>
      </div>
      <div class="col-md-7">
        <b-form class="needs-validation form-transparent" novalidate @submit="checkForm" id="contact-form">
          <b-form-group>
            <b-form-input
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

          <b-form-group>
            <b-form-input
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

          <b-form-group>
            <b-form-input
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

          <b-button block type="submit" variant="primary">Send</b-button>
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
      title: 'Contact Us',
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
.raised {
  border-radius: 10px;
  position: relative;
  top: 35px;
  margin: auto auto;
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
}
  .md-form {
    margin-top: 0.7rem;
    margin-bottom: 0.7rem;
  }
.copyright {
  font-size: 0.7rem;
}
</style>
