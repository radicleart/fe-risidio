<template>
<div v-if="content">
<section :style="bannerImage" id="section0" v-if="content.banner" class="lsatDemo">
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
      <div class="tabs-wrap px-4 mb-5">
        <b-tabs>
          <b-tab active>
            <template v-slot:title>
              <i class="fas fa-shoe-prints fa-rotate-270"></i><span>Instructions</span>
            </template>
            <div class="scrolls bg-white text-black p-4" style="">
              <h4>1. Place an Order</h4>
              <p class="text-in-black">Select the amount of Satoshi Jokes that you want to buy.</p>
              <p class="text-in-blue">Your order is sent to the merchant/ supplier/ provider.</p>
              <p class="text-in-blue">The merchant finds that you haven't paid for the goods yet. That is why it will create an invoice for you to pay.</p>
              <p class="text-in-blue">The invoice is now being sent to you.</p>
              <p class="text-in-blue last-blue">Your browser will display the invoice so you are able to pay it.</p>
              <h4>2. Pay the invoice</h4>
              <p class="text-in-black">Use your Lightning Wallet to pay the invoice, you can either scan the QR Code or copy the link.</p>
              <p class="text-in-blue">You will be sent a token as a proof of payment.</p>
              <p class="text-in-blue">The token is automatically forwarded to the retailer who verifies that the payment has been made.</p>
              <p class="text-in-blue last-blue">The retailer is now able to dispatch your goods.</p>
              <h4>3. Receive the purchased goods</h4>
              <p class="text-in-black">Your payment has gone through, so your browser will display your purchased goods.</p>
            </div>
          </b-tab>
          <b-tab>
            <template v-slot:title>
              <i class="fas fa-code"></i><span>System</span>
            </template>
            <div class="scrolls text-black p-4 second-tab-content">
              <div v-html="eventData"></div>
            </div>
          </b-tab>
        </b-tabs>
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
      this.eventData += '<p><pre style="color: #000;">' + JSON.stringify(paymentData) + '</pre></p>'
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
      const content = this.$store.getters['contentStore/getProductPage']('r-pay')
      if (content) {
        return content.data
      }
      return null
    },
    configuration () {
      const myKey = 'satoshi-jokes'
      const lookAndFeel = {
        labels: {
          orderMsg: 'Place order for \'Satoshi Jokes\' select number required and pay.',
          successMsg: 'Click to reveal punchlines!',
          title: 'Pay With',
          subtitle: 'Risidio Pay',
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
        text1Color: {
          color: '#000'
        },
        text2Color: {
          color: '#F9B807'
        },
        text3Color: {
          color: '#fff'
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
        width: '100%',
        'min-height': height + 'px',
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

<style>
/* PAGE STYLE */
.lsatDemo h4 {
  text-align: left;
}
.lsatDemo p {
  margin-bottom: 0px;
  color: #000;
  padding: 5px 0;
  font-size: 1.0em;
}
.lsatDemo li {
  list-style: none;
}
.p-inverse {
  margin-bottom: 0px;
  color: #fff;
  padding: 5px 0;
  font-size: 1.0em;
}

/* TAB CONTAINER STYLE */
.tabs-wrap {
  width: 100%;
  max-width: 448px;
}

/* TAB TITLES SECTION STYLE */
.tabs-wrap .nav-tabs li.nav-item:first-child {
  width: 60%;
}
.tabs-wrap .nav-tabs li.nav-item:last-child {
  width: 40%;
}
.tabs-wrap .nav-tabs {
  border-bottom: none;
}
.tabs-wrap .nav-tabs a.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  font-size: 14px;
  font-weight: bold;
  color: #000;
  background-color: #ffffff;
  border-radius: 10px 10px 0px 0px;
  border: none;
}
.tabs-wrap .nav-tabs a.nav-link i {
  font-size: 19px;
  margin-right: 10px;
}
.tabs-wrap .nav-tabs a.nav-link:focus {
  outline: none;
}

/* TAB CONTENT SECTION STYLE */
.tabs-wrap h4 {
  font-size: 14px;
  margin-bottom: 15px;
}
p.text-in-black {
  font-size: 14px;
  padding: 0 0 10px;
}
p.text-in-blue {
  text-align: right;
  font-size: 14px;
  font-weight: 600;
  color: #50B1B5;
  padding: 10px 0;
  border-top: solid 1px #50B1B5;
}
p.last-blue {
  margin-bottom: 15px;
  border-bottom: solid 1px #50B1B5;
}
.tabs-wrap .nav-tabs .nav-item:last-child a {
  background-color: #DFF2F2;
}
.second-tab-content {
  background-color: #DFF2F2;
}
.scrolls {
  height: auto;
  border-radius: 0 0 10px 10px;
  min-height: 749px;
}

/* MEDIA QUERIES */
@media (pointer:coarse) {
  .scrolls {
    overflow-y: scroll;
    height: 310px;
    min-height: 0;
  }
}
</style>
