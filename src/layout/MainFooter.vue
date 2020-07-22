<template>
<div v-if="content">
  <footer class="text-white" style="height: 280px;">
    <div class="row text-center m-0" style="height: 240px; background-color: #000;">
      <div class="col-md-4 d-none d-md-block" style="height: 240px;">
        <router-link to="/" class="pl-5 navbar-brand text-white" style="margin: 70px 0 0 0;"><img :src="logo" class="logoFooter"/></router-link>
      </div>
      <div class="col-md-6 col-sm-12 offset-md-1 content-footer">
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
    <div class="bg-ones pt-3 px-4 d-flex justify-content-between" style="height: 40px; font-size: 0.6rem; background-color: #000;">
      <div>
        &copy; &nbsp; {{ year }} Risidio Ltd. All right reserved.
      </div>
      <div>
        Privacy Policy
      </div>
    </div>
  </footer>
</div>
</template>
<script>
export default {
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
<style scoped>
.h2 {
  font-size: 17px;
  font-weight: 200;
}
.para {
  font-size: 12px;
  font-weight: 700;
  padding: 5px 0 0 0;
  margin: 0;
}
h2 {
  font-size: 17px;
  font-weight: 200;
}

p {
  font-size: 12px;font-weight: 700; padding: 5px 0 0 0; margin: 0;
}

.logoFooter {
  width: 255px;
  height: 100px;
}

@media only screen and (max-width: 900px) {
  .logoFooter {
    width: 138px;
    height: 55px;
  }
}

</style>
