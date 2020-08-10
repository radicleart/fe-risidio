<template>
<div v-if="content">
<section :style="bannerImage" id="section0" v-if="content.banner">
  <div class="d-flex align-items-center flex-column">
    <div class="my-auto">
      <div class="d-flex justify-content-center mt-5 mb-4">
        <div>
          <rpay-entry :paymentConfig="configuration" @paymentEvent="paymentEvent"/>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-5 mb-4">
        <div class="bg-light text-black p-4" v-if="!demoMode">
          <p>Payment received with thanks - here are you're Satoshi jokes</p>
          <h4>Joke 1</h4>
          <ul>
            <li>Knock knock</li>
            <li>Who's there?</li>
            <li>Satoshi</li>
            <li @click="j1 = !j1" class="text-success underline"><a href="#">click to reveal</a></li>
            <li v-if="j1">Satoshi who?</li>
          </ul>
          <h4>Joke 2</h4>
          <ul>
            <li>What do you call a man in a pile of leaves?</li>
            <li @click="j2 = !j2" class="text-success underline"><a href="#">click to reveal</a></li>
            <li v-if="j2">Russell!</li>
          </ul>
          <h4>Bonus Joke</h4>
          <ul>
            <li>What do you call a woman with a plate of eggs, beans and chips on her head?</li>
            <li @click="j3 = !j3" class="text-success underline"><a href="#">click to reveal</a></li>
            <li v-if="j3">Cath!</li>
          </ul>
          <h4>Start Over</h4>
          <ul>
            <li @click="demoMode = !demoMode" class="text-success underline"><a href="#">click to go again</a></li>
          </ul>
        </div>
      </div>
      <div class="d-flex justify-content-around">
        <div class="scrolls w-50 bg-white text-black p-5 mx-4" style="">
            <h4 class="text-left">LSAT Pay Tutorial...</h4>
            <h5 class="text-left">A) Place Order...</h5>
            <p>1. Purchase order is sent to merchant</p>
            <p>2. Merchant finds no valid payment token (LSAT) and does a POST redirect (307) to lsat server.</p>
            <p>3. Lsat server creates an invoice and send a 402 back to user browsers.</p>
            <p>4. Browser present the payment invoice to user.</p>
            <h5 class="text-left">B) User Pays...</h5>
            <p>5. User pays with their lightning enabled wallet.</p>
            <p>6. Auth server watches for payment and sends the payment preimage back to the user.</p>
            <p>7. Client save the token in local storage and sends to merchant as proof of payment.</p>
            <p>8. Client sends the token back to merchant to exchange for goods.</p>
            <p>9. Merchants decodes token - checks preimage is present and verifies.</p>
            <p>10. Merchants sends goods back to user.</p>
        </div>
        <div class="scrolls w-50 bg-black text-white p-5 border-top">
          <div v-html="eventData"></div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'
export default {
  name: 'LsatDemo',
  data () {
    return {
      demoMode: true, // leave r-pay up..
      j1: false,
      j2: false,
      j3: false,
      productId: null,
      paid: true,
      counter: 0,
      componentKey: 0,
      eventData: 'Starting demo...',
      message: '<h4>LSAT Pay tutorial...</h4>',
      tutorial: [
      ]
    }
  },
  mounted () {
    this.productId = this.$route.name
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const $self = this
    this.timer1 = setInterval(function () {
      if ($self.counter === 7) {
        clearInterval($self.timer1)
        return
      }
      $self.message += $self.tutorial[$self.counter]
      $self.counter++
      // $self.$notify({ group: 'egs', title: 'Step: ' + $self.counter % 3, text: $self.tutorial[$self.counter % 3] })
    }, 20)
  },
  methods: {
    paymentEvent: function (event) {
      const paymentData = event.detail[0]
      this.eventData += '<p><pre style="color: #fff;">' + JSON.stringify(paymentData) + '</pre></p>'
      if (paymentData.opcode === 'lsat-payment-confirmed') {
        this.demoMode = true
      }
    }
  },
  computed: {
    sectionDimensions () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + height * 2 + 'px; width: auto;'
    },
    content () {
      const content = this.$store.getters['contentStore/getProductPage']('lsat')
      if (content) {
        return content.data
      }
      return null
    },
    configuration () {
      // const content = this.$store.getters['contentStore/getProductPage']('lsat')
      const myKey = 'satoshi-jokes'
      // const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      const lookAndFeel = {
        labels: {
          orderMsg: 'Place order for \'Satoshi Jokes\' select number required and pay.',
          successMsg: 'Your order for jokes has been received with thanks.',
          title: 'Pay With',
          subtitle: 'LSAT Pay',
          card1Label: 'Select payment option',
          card2Label1: 'Number of jokes required?',
          card2Label2: 'Select operation',
          card2Label3: 'Make Payment',
          card2Label4: 'Open Channel',
          button1Label: 'Back',
          button2Label: 'Next',
          quantityLabel: 'Jokes'
        },
        sections: {
          stepper: true
        },
        cardStyle: {
          margin: '0',
          border: '0pt solid #232323',
          'border-radius': '0',
          'font-family': '"Arial", sans-serif'
        },
        background: {
          padding: '0px 0 0 0',
          height: 'auto',
          'max-width': '400px',
          position: 'relative',
          top: '0px',
          'background-repeat': 'no-repeat',
          'background-position': 'center center',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
          '-o-background-size': 'cover',
          'background-size': 'cover',
          'background-color': '#fff',
          opacity: 0.9
        }
      }
      const productOrder = {
        paymentId: myKey,
        opcode: 'lsat-place-order',
        purchaseEndpoint: '/assets/buy-now',
        apiKey: 'risidio-1',
        lookAndFeel: lookAndFeel,
        paymentOptions: { allowLightning: true, allowEthereum: false, allowBitcoin: false, allowStacks: true },
        paymentOption: 'lightning',
        creditAttributes: {
          amountFiatPerCredit: 0.1,
          fiatCurrency: 'EUR',
          useCredits: true,
          start: 1,
          step: 1,
          min: 1,
          max: 20
        }
      }
      const po = JSON.stringify(productOrder)
      window.risidioPaymentConfig = po
      return po
    },
    bannerImage () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return {
        padding: '40px 0 0 0',
        height: height * 2 + 'px',
        width: '100%',
        position: 'relative',
        top: '0px',
        'background-repeat': 'no-repeat',
        'background-image': `url(${this.content.banner.url})`,
        'background-position': 'center center',
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover',
        'background-color': '#121212',
        opacity: 1
      }
    }
  }
}
</script>

<style scoped>
.scrolls {
    max-width: 950px;
    overflow: hidden;
}

h4 {
  text-align: left;
}
p {
  margin-bottom: 0px;
  color: #000;
  padding: 5px 0;
  font-size: 1.0em;
}
li {
  list-style: none;
}
.p-inverse {
  margin-bottom: 0px;
  color: #fff;
  padding: 5px 0;
  font-size: 1.0em;
}
</style>
