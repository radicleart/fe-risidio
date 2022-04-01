const contentStore = {
  namespaced: true,
  state: {
    content: {
      homepage: null,
      aboutus: null,
      proposal: null,
      navigation: null,
      products: null,
      pages: null,
      recruitment: null,
      CSR: null,
      Contact: null,
      Marketplace: null
    },
    pageIds: {
      education: 'XuH1mBIAAFbNZG32',
      services: 'XuH1zRIAAFbNZG69',
      products: 'XuH1-xIAAFbNZG9o',
      bloghome: 'Xvz0uBAAACQAgGKh'
    },
    productIds: {
      loopbomb: 'XvthzhAAACYAeYsC',
      'r-pay': 'XvzS_BAAACUAf-p_',
      dsearch: 'XwWsMBEAACIAXzGC',
      'r-stack': 'XwdBhREAACIAZjWH',
      'x-change': 'XwXHAREAACMAX6m8',
      ownai: 'Xvzg-RAAACYAgCBY'
    }
  },
  getters: {
    getHomepage: state => {
      return state.content.homepage
    },
    getRecruitment: state => {
      return state.content.recruitment
    },
    getAboutUs: state => {
      return state.content.aboutus
    },
    getContact: state => {
      return state.content.Contact
    },
    getMarketPlace: state => {
      return state.content.Marketplace
    },
    getCSR: state => {
      return state.content.CSR
    },
    getPages: state => {
      return state.content.pages
    },
    getProductPages: state => {
      return state.content.productPages
    },
    getProposal: state => {
      return state.content.proposal
    },
    getPage: state => pageId => {
      pageId = state.pageIds[pageId]
      return (state.content.pages) ? (state.content.pages.filter(page => page.id === pageId))[0] : null
    },
    getProductPage: state => productId => {
      productId = state.productIds[productId]
      return (state.content.products) ? (state.content.products.filter(product => product.id === productId))[0] : null
    },
    getNavbar: state => {
      return state.content.navigation
    }
  },
  mutations: {
    addHomeContent (state, o) {
      state.content.homepage = o
    },
    addRecruitmentContent (state, o) {
      state.content.recruitment = o
    },
    addAboutUsContent (state, o) {
      state.content.aboutus = o
    },
    addCSRContent (state, o) {
      state.content.CSR = o
    },
    addMarketContent (state, o) {
      state.content.Marketplace = o
    },
    addNavigationContent (state, o) {
      state.content.navigation = o
    },
    addPages (state, o) {
      state.content.pages = o
    },
    addProducts (state, o) {
      state.content.products = o
    },
    addProposalContent (state, o) {
      state.content.proposal = o
    },
    addContant (state, o) {
      state.content.Contant = o
    }
  },
  actions: {
  }
}
export default contentStore
