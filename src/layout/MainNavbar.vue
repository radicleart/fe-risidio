<template>
<div class="d-flex justify-content-center">
<b-navbar type="" class="bg-dark p-0 my-nav" v-if="content">

  <!-- <b-navbar-brand href="#"><router-link to="/" class="navbar-brand"><img width="110px;" alt="asset flow logo" :src="content.logo.url"></router-link></b-navbar-brand> -->
  <b-navbar-brand href="#"><router-link to="/" class="pl-5 navbar-brand text-white" style="letter-spacing: 4px;"><h1>RISIDIO</h1></router-link></b-navbar-brand>
  <b-navbar-toggle target="nav-collapse">{{content.site_name[0].text}}</b-navbar-toggle>

  <b-collapse id="nav-collapse" is-nav class="">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto pr-5 mr-2">

    <div v-for="(item, index) of content.nav_links" :key="index">
      <b-nav-item><router-link class="text-white" :to="getLink(item)" style="font-weight: 900;">{{getLinkName(item)}}</router-link></b-nav-item>
    </div>
      <b-nav-item-dropdown class="v-text ml-3" right v-if="loggedIn && content.privateLinks" no-caret>
        <!-- Using 'button-content' slot -->
        <template v-slot:button-content>
          <i class="far fa-heart"></i>
        </template>
        <b-dropdown-item>{{ username }}</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item v-if="showAdmin || isDev"><router-link to="/my-sessions"><i class="far fa-play-circle"></i> Settings</router-link></b-dropdown-item>
        <b-dropdown-item><router-link class="text-dark" to="/my-assets"><i class="far fa-folder-open"></i> My Assets</router-link></b-dropdown-item>
        <b-dropdown-item><span @click="logout()"><i class="fas fa-sign-out-alt"></i> Logout</span></b-dropdown-item>
      </b-nav-item-dropdown>
      <!-- <b-nav-item @click.prevent="login" href="#" v-else>Login</b-nav-item> -->
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</div>
</template>

<script>
const getKeycloak = 'getKeycloak'
export default {
  name: 'MainNavbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
  },
  methods: {
    logout () {
      const keycloak = this.$store.getters[getKeycloak]
      keycloak.logout()
    },
    getLink (item) {
      return '/page/' + item.nav_link.id
    },
    getLinkName (item) {
      return item.nav_link.uid.split('-')[1].toLowerCase()
    },
    login () {
      this.$router.push('/login')
    }
  },
  computed: {
    isLoginPage () {
      return this.$route.name === 'login'
    },
    content () {
      const content = this.$store.getters['contentStore/getNavbar']
      return content
    },
    showAdmin () {
      const keycloak = this.$store.getters[getKeycloak]
      return keycloak.admin
    },
    username () {
      const keycloak = this.$store.getters[getKeycloak]
      return keycloak.username
    },
    avatar () {
      const keycloak = this.$store.getters[getKeycloak]
      return keycloak.avatar
    },
    loggedIn () {
      const keycloak = this.$store.getters[getKeycloak]
      if (keycloak) {
        return keycloak.authenticated
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>
.my-nav {
  height: auto;
  width: 100%;
}
.v-text {
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  font-size: 1.7rem;
}
.v-image {
  height: 30px;
}

</style>
