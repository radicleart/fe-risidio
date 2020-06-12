<template>
  <div id="app">
    <router-view name="header" />
    <router-view id="nav"/>
    <router-view name="footer" />
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted () {
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
  }
}
</script>
<style>
@import "./assets/css/resetr.css";
@import "./assets/css/common.css";
</style>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
