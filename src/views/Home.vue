<template>
<div class="home" v-if="content">
    <div class="page">
      <div class="row">
        <div class="col-6" v-for="(item, index) of content.images" :key="index">
          <b-card-group class="mb-3">
            <b-card header-tag="header" footer-tag="footer" style="width: 40%">
              <b-card-text class="text-center d-flex justify-content-center border-bottom py-3 text-dark">
                <div>
                  <div><font-awesome-icon size="3x"  :icon="icons[index]" transform="shrink-6" class="" /></div>
                  <h2>{{item.section_title[0].text}}</h2>
                </div>
              </b-card-text>
              <b-card-text class="mt-4" style="height: auto; font-size: 1.2rem;">
                <div class="row">
                  <div class="col-3">
                    <img width="150px" :src="item.image.url" :alt="item.image.alt" class="image" />
                  </div>
                  <div class="col-9">
                    <prismic-items :prismicItems="item.image_text"/>
                  </div>
                </div>
              </b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import PrismicItems from '@/components/PrismicItems'
// import { requestMixins } from '@/mixins/requestMixins'

export default {
  name: 'Home',
  // mixins: [requestMixins],
  data () {
    return {
      showAlert: false,
      name: '',
      icons: ['bahai', 'bahai', 'bahai', 'bahai']
    }
  },
  components: {
    PrismicItems
  },
  mounted () {
    console.log(this.$route)
  },
  beforeMount () {
    // this.getImagesByPage()
  },
  methods: {
    async getImagesByPage () {
      const response = await this.getImages()
      this.images = response.data.hits
    },
    dismissed: function (data) {
      if (data && data.detail) {
        this.$router.push('/about')
      }
    }
  },
  computed: {
    content () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content
    },
    section1 () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content
    }
  }
}
</script>
<style>
</style>
