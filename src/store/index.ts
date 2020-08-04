import Vue from 'vue'
import Vuex from 'vuex'
import contentStore from './contentStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windims: { innerWidth: window.innerWidth, innerHeight: window.innerHeight },
    apiKey: 'blockstack-loopbomb-01234',
    creditAttributes: {
      amountFiatPerCredit: 0.1,
      fiatCurrency: 'EUR',
      useCredits: true,
      start: 2,
      step: 2,
      min: 2,
      max: 20
    },
    paymentOptions: { mainOption: 'ethereum', allowLightning: false, allowEthereum: true, allowBitcoin: false, allowStacks: false }
  },
  getters: {
    getConfiguration: state => opcode => {
      return {
        apiKey: state.apiKey,
        paymentOptions: state.paymentOptions,
        paymentOption: state.paymentOptions.mainOption,
        opcode: opcode,
        creditAttributes: state.creditAttributes
      }
    },
    getSectionHeight: state => {
      return (state.windims.innerHeight)
    }
  },
  mutations: {
    setWinDims (state) {
      state.windims = {
        innerWidth: window.innerWidth, innerHeight: window.innerHeight
      }
    }
  },
  actions: {
  },
  modules: {
    contentStore
  }
})
