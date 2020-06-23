<template>
  <div id="app">
    <div v-if="loading">Introducing Risidio Screen</div>
    <div v-else>
      <router-view name="header" @scrollMeTo="scrollMeTo($event)"/>
      <router-view class="" id="nav"/>
      <router-view name="footer" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 3000)
    this.$prismic.client.getSingle('homepage').then(document => {
      if (document) {
        this.$store.commit('contentStore/addHomeContent', document.data)
      }
    })
    this.$prismic.client.getSingle('navigation').then(document => {
      if (document) {
        this.$store.commit('contentStore/addNavigationContent', document.data)
        this.$prismic.client.query(
          this.$prismic.Predicates.at('document.type', 'page'),
          { pageSize: 20, page: 1 }
        ).then((response) => {
          this.$store.commit('contentStore/addPages', response.results)
        })
      }
    })
  },
  methods: {
    scrollMeTo (data) {
      const element = document.getElementById(data.refName)
      const top = element.offsetTop
      window.scrollTo(0, top)
    }
  }
}
</script>
<style>
@import "./assets/css/resetr.css";
@import "./assets/css/common.css";
</style>
<style lang="scss">
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
a:hover {
  text-decoration: none !important;
}
pre {
  margin: 60px 0px;
  padding: 30px 20px;
  background-color: aliceblue;
}
.block-img {
  margin-top: 50px;
}
</style>
