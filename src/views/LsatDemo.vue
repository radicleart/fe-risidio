<template>
<div v-if="content">
<section id="section0" v-if="content.banner" :style="sectionDimensions">
  <div :style="bannerImage" class="d-flex align-items-center flex-column">
    <div class="my-auto">
      <div class="row">
        <div class="col-12">
          <lsat-entry :paymentConfig="configuration" @paymentEvent="paymentEvent"/>
        </div>
        <div class="text1 col-12 bg-white p-5">
          <div>
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
        </div>
        <div class="p-inverse col-12 bg-black text-white p-5 border-top">
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
      const data = event.detail[0]
      this.eventData += '<p><pre class="p-inverse">' + JSON.stringify(data) + '</pre></p>'
      if (data.opcode === 'lsat-payment-confirmed') {
        console.log('settledInvoice= ', data.resource)
        this.$store.commit('addResource', this.productId)
        this.$router.push('/shipping/' + this.productId)
      } else if (data.opcode === 'payment-expired') {
        this.$router.push('/product/' + this.productId)
      } else if (data.opcode === 'payment-rates') {
        this.$emit('latestPaymentRates', data.resource)
      } else if (data.opcode === 'lsat-payment-begun') {
        this.$emit('latestPaymentRates', data.resource)
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
          opacity: 1
        }
      }
      const productOrder = {
        paymentId: myKey,
        opcode: 'lsat-place-order',
        purchaseEndpoint: '/assets/buy-now',
        apiKey: 'demo-digital-01234',
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
        height: height + 'px',
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
p {
  margin-bottom: 0px;
  color: #000;
  padding: 5px 0;
  font-size: 1.0em;
}
.p-inverse {
  margin-bottom: 0px;
  color: #fff;
  padding: 5px 0;
  font-size: 1.0em;
}
</style>
