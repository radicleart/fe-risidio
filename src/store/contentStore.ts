const contentStore = {
  namespaced: true,
  state: {
    content: {
      homepage: null,
      navigation: null,
      products: null,
      pages: null
    }
  },
  getters: {
    getHomepage: state => {
      return state.content.homepage
    },
    getPages: state => {
      return state.content.pages
    },
    getPage: state => pageId => {
      return (state.content.pages) ? (state.content.pages.filter(page => page.id === pageId))[0] : null
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
    }
  },
  actions: {
  }
}
export default contentStore
