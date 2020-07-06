<template>
<div v-if="content">
<section id="section0" v-if="content.banner">
  <div :style="bannerImage" class="d-flex align-items-center flex-column">
    <div class="my-auto">
      <div :key="componentKey">
        <b-card ref="tutorial" class="d-flex justify-content-start w-50" style="width: 200px; border: 1pt solid black;">
          <card-text v-if="counter > 0">
            {{message}}
          </card-text>
        </b-card>
      </div>
      <lsat-entry :paymentConfig="configuration" @paymentEvent="paymentEvent"/>
    </div>
    <!--
    <div class="my-auto text-center">
      <div class="mt-5"><h1 class="text-white">{{content.title[0].text}}</h1></div>
      <div class="">
        <p class="text-center blurb2 text-white">{{content.title1[0].text}}</p>
      </div>
    </div>
    -->
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
      message: null,
      tutorial: [
        'Loading LSAT Pay tutorial...',
        'At this stage an order has been sent to the merchant.',
        'This is the accompanying tutorial for the lsat payment..'
      ]
    }
  },
  mounted () {
    this.productId = this.$route.name
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const $self = this
    this.timer1 = setInterval(function () {
      $self.counter++
      if ($self.counter === 4) $self.counter = 0
      $self.componentKey++
      $self.message = $self.tutorial[$self.counter % 3]
      $self.$notify({ group: 'egs', title: 'Step: ' + $self.counter % 3, text: $self.tutorial[$self.counter % 3] })
    }, 2000)
  },
  methods: {
    paymentEvent: function (data) {
      if (data.opcode === 'lsat-payment-confirmed') {
        console.log('settledInvoice= ', data.resource)
        this.$store.commit('addResource', this.productId)
        this.$router.push('/shipping/' + this.productId)
      } else if (data.opcode === 'payment-expired') {
        this.$router.push('/product/' + this.productId)
      } else if (data.opcode === 'payment-rates') {
        this.$emit('latestPaymentRates', data.resource)
      }
    }
  },
  computed: {
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
          title: 'Pay With',
          subtitle: 'LSAT Pay',
          card1Label: 'Select payment option',
          card2Label1: 'Quantity required',
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
</style>
