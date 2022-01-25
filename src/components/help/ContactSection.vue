<template>
<div class="container-fluid">
<div id="ContactSection" class="pt-5 contact-section">

  <section class="px-0">
    <div class="row">

      <div class="col-md-12">
        <h4>Any thoughts, questions, just want to say hello?</h4 >
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
                    :placeholder="'Your name'"
                    required>
                  </b-form-input>

                </b-form-group>
              </b-col>

              <b-col cols="4">
                <b-form-group>
                  <b-form-input
                    prepend="@"
                    id="validation-email"
                    v-model="email"
                    type="text"
                    :placeholder="'Email address'"
                    required>
                  </b-form-input>

                </b-form-group>
              </b-col>
            </b-row>

            <b-row class="mb-4 mt-2">
              <b-col cols="8" offset="2">
                <!-- <b-form-select v-model="selected" :options="selectionOptions" class="form-control" required></b-form-select> -->
                <b-form-input
                prepend="@"
                v-model="subject"
                type="text"
                placeholder="Subject of your question"
                required>
                </b-form-input>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="8" offset="2">
                <b-form-group>
                  <b-form-textarea
                    class="form-control"
                    id="validation-message"
                    placeholder="How can we help"
                    v-model="message"
                    rows="5"
                    required>
                  </b-form-textarea>
                </b-form-group>
              </b-col>
            </b-row>

          </b-container>

          <div v-if="sendMessage"><p class="confirmMessage">Your message has been sent ! Thank you :)</p></div>

          <b-button pill type="submit" class="submitButton">Submit</b-button>
        </b-form>
      </div>
    </div>
  </section>
</div>
</div>
</template>

<script>

import sendAEmail from './emailSender'

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
      sendMessage: false
    }
  },
  mounted () {
    const profile = this.$store.getters['myAccountStore/getMyProfile']
    this.profile = profile
  },
  methods: {
    upload () {
      sendAEmail(this.subject, this.name, this.email, this.message)
      this.subject = ''
      this.name = ''
      this.email = ''
      this.message = ''
      this.sendMessage = true
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
input {
  font-size: 12px;
  padding-left: 19px;
  padding-right: 19px;
}
textarea{
  font-size: 12px;
  padding-left: 19px;
  padding-right: 19px;
  resize: none;
}
input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
}
textarea::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
}
button {
  font-size: 13px;
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
.confirmMessage {
  color: white;
  text-align: center;
  font-size: 20px;
}
</style>
