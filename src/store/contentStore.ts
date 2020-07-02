const contentStore = {
  namespaced: true,
  state: {
    content: {
      homepage: null,
      navigation: null,
      products: null,
      pages: null
    },
    pageIds: {
      education: 'XuH1mBIAAFbNZG32',
      services: 'XuH1zRIAAFbNZG69',
      products: 'XuH1-xIAAFbNZG9o',
      bloghome: 'Xvz0uBAAACQAgGKh'
    },
    productIds: {
      loopbomb: 'XvthzhAAACYAeYsC',
      lsat: 'XvzS_BAAACUAf-p_',
      hubber: 'Xvzg-RAAACYAgCBY'
    }
  },
  getters: {
    getHomepage: state => {
      return state.content.homepage
    },
    getPages: state => {
      return state.content.pages
    },
    getProductPages: state => {
      return state.content.productPages
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
    addNavigationContent (state, o) {
      state.content.navigation = o
    },
    addPages (state, o) {
      state.content.pages = o
    },
    addProducts (state, o) {
      state.content.products = o
    }
  },
  actions: {
  }
}
export default contentStore
