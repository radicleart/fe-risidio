<template>
<div class="container-fluid">
<div id="ContactSection" class="pt-5 contact-section">

  <section class="px-0">
    <div class="row">

      <div class="col-md-12">
        <h4>Any thought, questions, just want to say hello?</h4 >
        <h3>Contact Us</h3>
      </div>

      <div class="contact-form">
        <b-form class="needs-validation form-transparent" novalidate @submit="checkForm" id="contact-form">
          <b-container class="text-input11">
            <b-row class="mt-4">
              <b-col cols="4" offset="2">
                <b-form-group>

                  <b-form-input
                    prepend="@"
                    id="validation-name"
                    v-model="name"
                    type="text"
                    :placeholder="'Your name..'"
                    required>
                  </b-form-input>

                  <b-form-invalid-feedback>
                    Please enter your name, or you artist pseudo !
                  </b-form-invalid-feedback>

                </b-form-group>
              </b-col>

              <b-col cols="4">
                <b-form-group>
                  <b-form-input
                    prepend="@"
                    id="validation-email"
                    v-model="email"
                    type="text"
                    :placeholder="'Email address..'"
                    required>
                  </b-form-input>

                  <b-form-invalid-feedback>
                    Please enter your email - it's not stored - just used to reply..
                  </b-form-invalid-feedback>

                </b-form-group>
              </b-col>
            </b-row>

            <b-row class="mb-4 mt-2">
              <b-col cols="8" offset="2">
                <b-form-select v-model="selected" :options="selectionOptions" class="form-control" required></b-form-select>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="8" offset="2">
                <b-form-group>
                  <b-form-textarea
                    class="form-control"
                    id="validation-message"
                    placeholder="How can we help..."
                    v-model="message"
                    rows="5"
                    required>
                  </b-form-textarea>
                  <b-form-invalid-feedback>
                    Please tell us how we can help!
                  </b-form-invalid-feedback>
                </b-form-group>
              </b-col>
            </b-row>

          </b-container>

          <b-button pill type="submit" class="submitButton">Submit</b-button>
        </b-form>
      </div>
    </div>
  </section>
</div>
</div>
</template>

<script>

export default {
  name: 'ContactSection',
  props: ['featureMessage'],
  data () {
    return {
      selected: null,
      selectionOptions: [
        { value: null, text: 'Tell us who you are !' },
        { value: 'a', text: 'I am an artist' },
        { value: 'b', text: 'I am a crypto-curious' }],
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

<style scoped>
h4 { /*Style of the text above Contact Us */
  font-size: 17px;
  color: white;
  text-align: center;
  margin-top: 6%;
  text-transform: capitalize;
}

h3 { /* Contact us style */
  font-size: 40px;
  font-weight: 300;
  color: white;
  text-align: center;
  text-transform: capitalize;
}
.form-control { /*Style of the form area */
  border-radius: 17px;
  border-width: 0;
  background-color: rgba(255, 255, 255, 0.12);
  color: white;
}
.submitButton{
  background-color: #5FBDC1;
  margin: 0 auto;
  display: block;
  margin-bottom: 12%;
  margin-top: 5%;
}
.contact-form{
  margin: 0 auto;
  width: 918px;
}
.container {
  background-color: #5154A1;
  text-align: center;
  width: 100%;
}
</style>
