<template>
  <div class="sib-form">
    <div id="sib-form-container" class="sib-form-container">

      <form id="sib-form" @submit="sendSubscriptionEmail">

        <b-row class="d-flex flex-column flex-sm-row">
          <b-col>
            <input class="input mb-3" maxlength="200" type="text" id="NAME" name="NAME" autocomplete="off" placeholder="Name" data-required="true" v-model="name" required />
          </b-col>
          <b-col>
            <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="Email" data-required="true" v-model="email" required />
          </b-col>
        </b-row>

        <div class="sib-form-block mt-4">
          <button class="sib-form-block__button sib-form-block__button-with-loader " form="sib-form" type="submit">
            <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
              <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
            </svg>
            Subscribe
          </button>
        </div>

        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="en">
      </form>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SectionSendinblue',
  components: {
  },
  data () {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    sendSubscriptionEmail (event) {
      event.preventDefault()
      axios.post('https://risidio-website-email-api.herokuapp.com/subscribe', {
        name: this.name,
        email: this.email
      }).then(res => {
        this.name = ''
        this.email = ''
      }).catch((error) => {
        this.name = ''
        this.email = ''
        console.log(error)
      })
    }
  },
  mounted () {
    const sendinblueStyle = document.createElement('link')
    sendinblueStyle.rel = 'stylesheet'
    sendinblueStyle.type = 'text/css'
    sendinblueStyle.href = 'https://sibforms.com/forms/end-form/build/sib-styles.css'
    document.head.appendChild(sendinblueStyle)

    window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code'
    window.LOCALE = 'en'
    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = 'The information provided is invalid. Please review the field format and try again.'
    window.REQUIRED_ERROR_MESSAGE = 'This field cannot be left blank.'
    window.GENERIC_INVALID_MESSAGE = 'The information provided is invalid. Please review the field format and try again.'
    window.translation = {
      common: {
        selectedList: '{quantity} list selected',
        selectedLists: '{quantity} lists selected'
      }
    }
    const AUTOHIDE = Boolean(0)
  }
}
</script>

<style scoped>
.sib-form {
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  max-width: 1100px;
}
input {
  border-radius: 17px;
  border-width: 0;
  background-color: rgba(255, 255, 255, 0.12) !important;
  color: white !important;
}
input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
}
.sib-form input.input {
  padding: 0 19px;
  font-size: 12px;
  box-sizing: border-box;
  width: 100%;
}
.sib-form {
  background-color: #5154a1;
  width: 100%;
  max-width: 600px;
}
.sib-form-container {
  background-color: #5154a1;
}
.sib-form-message-panel {
  max-width: 80%;
}
button {
  background-color: #5FBDC1;
  margin: 0 auto;
  display: block;
  border-radius: 22px;
  color: white;
  font-size: 13px;
}
button:hover {
  color:#5FBDC1 !important;
}
</style>
