<template>
<div class="d-flex justify-content-center">
  <b-navbar type="" class="transparent p-0 my-nav" v-if="content" style="z-index: 2;">
    <b-navbar-brand href="#"><router-link to="/" class="pl-5 navbar-brand"><img :src="logo"/></router-link></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav class="">
      <b-navbar-nav>
        <!--
        <b-nav-item><router-link class="text-white" to="/education">Education</router-link></b-nav-item>
        <b-nav-item><router-link class="text-white" to="/services">Services</router-link></b-nav-item>
        -->
        <b-nav-item to="/products" class="nav-text">Products</b-nav-item>
        <b-nav-item to="/blog" class="nav-text text-white">News</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto mr-4">
        <b-nav-item class=""><button class="text-info"><a href="#"  @click="$emit('scrollMeTo', {refName: 'section6'})" class="call-button-text">Join Us</a></button></b-nav-item>
        <!-- <lsat-entry :configuration="configuration" style="text-decoration: none;"/> -->
        <b-nav-item-dropdown class="v-text ml-3" right v-if="loggedIn && content.privateLinks" no-caret>
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
import { SITE_CONSTANTS } from '@/site-constants'

const getKeycloak = 'getKeycloak'
export default {
  name: 'MainNavbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
  },
  data () {
    return {
      logo: require('@/assets/img/xd/risidio_white1.png'),
      showLogin: false
    }
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
    configuration () {
      const configuration = this.$store.getters[SITE_CONSTANTS.KEY_SITE_CONSTANTS]('login')
      window.risidioPaymentConfig = JSON.stringify(configuration)
      return configuration
    },
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
.text-white {
  text-align: left;
  font: Regular 11px/13px Montserrat;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
}
.join-us {
  width: 97px;
  height: 43px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 22px;
  opacity: 0.6;
  text-align: center;
}
.join-us:hover {
  opacity: 0.4;
}
.text-info {
  font: Bold 11px/13px Montserrat;
  letter-spacing: 0px;
  color: #5FBDC1;
  opacity: 1;
  text-decoration: none;
}
.my-nav {
  height: 70px;
  width: 100%;
}
.v-text {
  font-weight: 200;
  font-size: 1.7rem;
}
.v-image {
  height: 30px;
}

</style>
