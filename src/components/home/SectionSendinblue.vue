<template>
  <div class="sib-form">
    <div id="sib-form-container" class="sib-form-container">
      <div id="error-message" class="sib-form-message-panel">
        <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
          <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
            <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
          </svg>
          <span class="sib-form-message-panel__inner-text">Your subscription could not be saved. Please try again.</span>
        </div>
      </div>

    <div id="success-message" class="sib-form-message-panel">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
        </svg>
        <span class="sib-form-message-panel__inner-text">Your subscription has been successful.</span>
      </div>
    </div>

      <form id="sib-form" method="POST" action="https://8c4c752b.sibforms.com/serve/MUIEAGygmv_pg6Nn0v29Itw9veJ65yYVaSqyZ1VfBMC4aso0NWpviftQFVAj-ahjV3TbjXa8MkIUmzJm30P7SRuSUBl0UDPvmxNXpTe2E_YYXm7dw6LiCIR4S5vHgUVl3qZZiehIZUbBW6aZLpmHkC_Y6RsCyxy94jKHoKrWCkXRI3HTwPAqXbSXDA32aw3pbc3lPKd9ZQeEFiH6" data-type="subscription">

        <b-row class="d-flex flex-column flex-sm-row">
          <b-col>
            <input class="input mb-3" maxlength="200" type="text" id="NAME" name="NAME" autocomplete="off" placeholder="Name" data-required="true" required />
          </b-col>
          <b-col>
            <input class="input" type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="Email" data-required="true" required />
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
export default {
  name: 'SectionSendinblue',
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
    const sendinblueStyle = document.createElement('link')
    sendinblueStyle.rel = 'stylesheet'
    sendinblueStyle.type = 'text/css'
    sendinblueStyle.href = 'https://sibforms.com/forms/end-form/build/sib-styles.css'
    document.head.appendChild(sendinblueStyle)
    const sendinblueScript = document.createElement('script')
    sendinblueScript.src = 'https://sibforms.com/forms/end-form/build/main.js'
    document.body.appendChild(sendinblueScript)

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
}
input {
  border-radius: 17px;
  border-width: 0;
  background-color: rgba(255, 255, 255, 0.12) !important;
  color: white !important;
}
input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.7);
}
.sib-form input.input {
  padding: 0 19px;
  font-size: 12px;
}
.sib-form {
  background-color: #5154a1;
  width: 100%;
  padding-left: 15%;
  padding-right: 15%;
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
