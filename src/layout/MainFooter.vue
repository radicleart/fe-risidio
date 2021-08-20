<template>
<div v-if="content">
      <b-nav-item to="/contact" class="joinUsButton"><button v-b-toggle.nav-collapse @click="noScroll();" class="text-info"><a data-toggle="collapse" href="#nav-collapse" class="call-button-text">Contact us</a></button></b-nav-item>
  <footer class="text-white footer-container">
    <div class="row text-center m-0 d-sm-flex d-none" style="height: 240px;">
      <div class="col-lg-4 col-md-3 d-md-block d-none" style="height: 240px;">
        <router-link to="/" class="pl-5 navbar-brand text-white" style="margin: 70px 0 0 0;"><img :src="logo" alt="Risidio Logo" class="footer-logo"/></router-link>
      </div>
      <div class="col-lg-6 col-md-8 offset-lg-1 content-footer">
        <div class="row text-left mt-5">
          <div class="col-3" v-html="getContent('sitemap')">
          </div>
          <div class="col-3" v-html="getContent('products1')">
          </div>
          <div class="col-3" v-html="getContent('joinus')">
          </div>
          <div class="col-3" v-html="getContent('contact')">
          </div>
        </div>
      </div>
    </div>
    <div class="pt-3 px-4 justify-content-between d-sm-flex d-none" style="height: 40px; font-size: 0.6rem;">
      <div>
        &copy; &nbsp; {{ year }} Risidio Ltd. All right reserved.
      </div>
      <div>
        Privacy Policy
      </div>
    </div>
    <!-- MOBILE DESIGN !-->
    <div class="row flex-flow-column justify-content-center text-center m-0 d-sm-none mobile-footer">
      <div class="col-12">
        <router-link to="/" class="navbar-brand text-white" style="margin: 60px 0 40px 0; height: auto;"><img :src="logo" alt="Risidio Logo" class="footer-logo"/></router-link>
      </div>
      <div class="col-12 mobile-footer--contact" v-html="getContent('contact')"></div>
      <div class="col-12 social-icons">
        <span style="font-size: 15px;">
          <a href="https://discord.gg/qvuxB9P"><i class="fab fa-discord"></i></a>
          <a href="https://twitter.com/Risidio1"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/risidio_official/"><i class="fab fa-instagram"></i></a>
        </span>
      </div>
    </div>
    <div class="row text-center d-sm-none mobile-footer--copyright">
      <div class="col-12">
        &copy; &nbsp; {{ year }} Risidio Ltd. All right reserved.
      </div>
    </div>
    <cookie-law theme="risidio-theme">
      <div slot="message">
        This website uses cookies to work properly but does not use tracking cookies.
      </div>
    </cookie-law>
  </footer>
</div>
</template>
<script>
import CookieLaw from 'vue-cookie-law'

export default {
  components: { CookieLaw },
  props: {
    backgroundColor: String,
    type: String
  },
  data () {
    return {
      logo: require('@/assets/img/xd/logoWhite.svg'),
      year: new Date().getFullYear()
    }
  },
  methods: {
    getContent (contentType) {
      const content = this.$store.getters['contentStore/getHomepage']
      if (content) {
        let sitecontent = ''
        content.footer[0][contentType].forEach(function (option) {
          sitecontent += option.text
        })
        return sitecontent
      }
      return {}
    }
  },
  computed: {
    content () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content
    }
  }
}
</script>
<style>
.footer-container {
  height: 280px;
  background-color: #000;
}

.footer-container h2 {
  font-size: 17px;
  font-weight: 200;
}

.footer-container p {
  font-size: 12px;font-weight: 700; padding: 5px 0 0 0; margin: 0;
}

.footer-logo {
  width: 255px;
  height: 100px;
}

/* COOKIES POP UP STYLE */
.Cookie--risidio-theme {
  background: rgba(255, 255, 255);
  box-shadow: 0px -2px 10px #737373;
  color: #000000;
  padding: 1rem;
}
.Cookie--risidio-theme .Cookie__button {
  background: #5FBDC1;
  color: #FFFFFF;
  border-radius: 22px;
  width: 141px;
  height: 43px;
  border: none;
}
.Cookie--risidio-theme .Cookie__button:hover {
  background: #2d8487;
}

@media only screen and (max-width: 767px) {
  .Cookie--risidio-theme .Cookie__content {
    margin-bottom: 0;
  }
  .Cookie--risidio-theme {
    padding: 0 1rem;
  }
}

/* FOOTER ON MOBILE */
.mobile-footer p {
  width: 30%;
  margin: 0 auto !important;
  text-align: center;
  font-size: 10px !important;
  font-weight: 400 !important;
  letter-spacing: 0.5px;
  padding-top: 8px !important;
}

.mobile-footer h2 {
  font-size: 15px !important;
  letter-spacing: 0.75px;
  margin-bottom: 2px;
}

.mobile-footer--contact p:last-child, .mobile-footer--contact p:nth-child(3) {
  display: none;
}

.social-icons {
  margin-top: 11px;
}

.social-icons a:not(:last-child) {
  margin-right: 15px;
}

.social-icons a {
  color: #fff;
}

.social-icons a:hover {
  color: #fff;
}

.mobile-footer--copyright {
  font-size: 8px;
  font-weight: 300;
  padding-bottom: 22px;
}

@media only screen and (max-width: 991px) {
  .footer-logo {
    width: 138px;
    height: 55px;
  }
}

@media only screen and (max-width: 768px) {
  .content-footer {
    margin-left: 3rem;
  }
}

@media only screen and (max-width: 575px) {
  .footer-logo {
    width: 200px;
    height: auto;
  }
  .footer-container {
    height: 395px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
}

@media only screen and (max-width: 320px) {
  .mobile-footer p {
    width: 33%;
  }
}
</style>
