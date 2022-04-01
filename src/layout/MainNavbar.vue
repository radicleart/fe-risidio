<template>
<div class="d-flex justify-content-center">
  <b-navbar toggleable="md" type="dark" class="p-0 my-nav navbar-expand-sm" v-if="content">
    <b-navbar-brand href="#"><router-link to="/" class="navbar-brand"><img :src="logo" alt="Risidio Logo"/></router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" @click="noScroll()"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-b-toggle.nav-collapse @click="noScroll()">
        <!--
        <b-nav-item><router-link class="text-white" to="/education">Education</router-link></b-nav-item>
        <b-nav-item><router-link class="text-white" to="/services">Services</router-link></b-nav-item>
        -->
        <b-nav-item to="/marketplace" class="nav-text marketplace-link">Our Work</b-nav-item>
        <b-nav-item to="/aboutus" class="nav-text about-link">About</b-nav-item>
        <b-nav-item to="/CSR" class="nav-text csr-link">Sustainability</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto mr-4">
        <b-nav-item to="/contact" class="contactButton"><button v-b-toggle.nav-collapse @click="noScroll();" class="text-info"><a data-toggle="collapse" href="#nav-collapse" class="call-button-text">Contact</a></button></b-nav-item>
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
      <b-navbar-nav class="mobile-nav-items">
        <b-nav-text class="text-white mobile-nav-items--social">
          <a href="https://discord.gg/nmKx5WkPaG" target="_blank"><span style="font-size: 15px;"><i class="fab fa-discord"></i></span></a>
          <a href="https://twitter.com/Risidio1" target="_blank"><span style="font-size: 15px;"><i class="fab fa-twitter"></i></span></a>
          <a href="https://www.instagram.com/risidio_official/" target="_blank"><span style="font-size: 15px;"><i class="fab fa-instagram"></i></span></a>
        </b-nav-text>
        <b-nav-text v-b-toggle.nav-collapse @click="noScroll()" class="nav-text text-white mobile-nav-items--terms">
          <router-link to="/aboutus">Terms & conditions</router-link> • <router-link to="/aboutus">Privacy policy</router-link>
        </b-nav-text>
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
      logo: require('@/assets/img/xd/risidio_logo_white.svg'),
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
    },
    noScroll () {
      const width = window.innerWidth
      if (width <= 575) {
        document.body.classList.toggle('no-scroll')
      }
    },
    goToContact () {
      if (this.$route.name === 'blog-home' || this.$route.name === 'post' || this.$route.name === 'Proposal') {
        this.$router.push('/')
      }
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
.navbar-brand img {
  height: 55px;
}
.navbar {
  background-color: transparent;
  z-index: 100;
}
.navbar-brand {
  margin-right: 0;
}
.navbar-brand a {
  padding-left: 3rem;
}
.nav-text a.nav-link {
  color: #FFFFFF;
}
.nav-text a.nav-link:hover, .nav-text a.nav-link.router-link-active {
  color: #FFFFFF;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
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

.navbar-toggler {
  width: auto;
  margin-right: 1.5rem;
}

.navbar-toggler:hover {
  background-color: transparent;
}

.navbar-nav:focus {
  outline: none;
}

.navbar .navbar-nav .nav-link {
    padding-left: 0;
    padding-right: 0;
    padding-top: 1.9rem;
}

.nav-link {
  margin-left: 40px;
}

/* MOBILE DESIGN */
.mobile-nav-items {
  display: none;
}

.mobile-nav-items--social a:not(:last-child) {
  margin-right: 15px;
}

.navbar .navbar-nav .mobile-nav-items--terms {
  margin-bottom: 15px;
}

.navbar .navbar-nav .mobile-nav-items--terms a {
  font-size: 10px;
  font-weight: 300;
  margin-bottom: 15px;
}

@media only screen and (min-width: 576px) {
  #nav-collapse {
    transition: none;
  }
}

@media only screen and (max-width: 660px) and (min-width: 576px) {
  .nav-link {
    margin-left: 20px;
  }
  .navbar-brand a {
    padding-left: 2rem;
    margin-right: 10px;
  }
}

@media only screen and (max-width: 575px) {
  .mobile-nav-items {
    display: flex;
    margin-top: auto;
  }
  .navbar {
    background-color: #000;
    position: fixed !important;
    right: 0;
    left: 0;
    top: 0;
  }
  .navbar-collapse {
    background-color: #000;
    z-index: -1;
    height: 100vh;
    margin-top: -60px;
    display: flex;
    flex-flow: column;
    transition: height 0.5s ease-out;
  }
  .navbar .navbar-nav .nav-link {
    margin-bottom: 22px;
    margin-left: 0;
    padding: 0;
    font-size: 24px;
    font-weight: 200;
  }
  .navbar-nav:first-child {
    margin-top: 10rem;
  }
  .navbar-nav {
    align-items: center;
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .navbar-nav .contactButton button {
    background-color: transparent;
    width: auto;
    height: auto;
    padding: 0;
  }
  .call-button-text {
    font-size: 24px;
    font-weight: 500;
  }
  .navbar-brand a {
    padding-right: 0;
    padding-left: 1.5rem;
  }
  .navbar-brand img {
    height: 45px;
  }
}
</style>
