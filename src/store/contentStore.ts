const contentStore = {
  namespaced: true,
  state: {
    content: {
      homepage: null,
      about: null,
      CSR: null,
      marketplace: null,
      joinus: null
    }
  },
  getters: {
    getHomepage: state => {
      return state.content.homepage
    },
    getAbout: state => {
      return state.content.about
    },
    getCSR: state => {
      return state.content.CSR
    },
    getMarketplace: state => {
      return state.content.marketplace
    },
    getJoinUs: state => {
      return state.content.joinus
    }
  },
  mutations: {
    addHomeContent (state, o) {
      state.content.homepage = o
    },
    addAboutContent (state, o) {
      state.content.about = o
    },
    addCSRContent (state, o) {
      state.content.CSR = o
    },
    addMarketplace (state, o) {
      state.content.marketplace = o
    },
    addJoinUs (state, o) {
      state.content.joinus = o
    }
  },
  actions: {
  }
}
export default contentStore
