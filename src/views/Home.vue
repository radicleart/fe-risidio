<template>
<div class="home" v-if="content">
    <div class="page">
    <div v-for="(item, i) of content.images" :key="i" class="parallax-container">
      <parallax :speed-factor="0.5" direction="down" :parallax="true">
        <div>
          <img width="90%" :src="item.image.url" :alt="item.image.alt" class="image" />
          <!-- <h1 class="parallax-title">{{item.image_text[0].text}}</h1> -->
          <prismic-items class="parallax-title" :prismicItems="item.image_text"/>
        </div>
      </parallax>
      <br />
    </div>
  </div>

  <div class="" style="position: absolute; top: 0; left: 0; z-index: -1;">
    <parallax>
      <img width="100%" :src="content['homepage_image'].url" alt="very cool bg">
    </parallax>
  </div>
  <div>
    <b-button class="bg-info" size="sm" @click="showAlert = !showAlert">
      <font-awesome-icon size="10x"  icon="heart" transform="shrink-6" :style="{ color: 'blue' }"/>
    </b-button>

    <b-alert
      v-model="showAlert"
      class="mt-3"
      @dismissed="dismissed"
    >
      Coming soon {{ name }}!
    </b-alert>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import PrismicItems from '@/components/PrismicItems'
import Parallax from 'vue-parallaxy'
// import { requestMixins } from '@/mixins/requestMixins'

export default {
  name: 'Home',
  // mixins: [requestMixins],
  data () {
    return {
      showAlert: false,
      name: '',
      images: []
    }
  },
  components: {
    PrismicItems,
    Parallax
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
    }
  }
}
</script>
<style>
.parallax-container {
  position: relative;
  height: 600px;
}
.parallax-title {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  padding: 20px;
  text-align: center;
}
.image {
  height: 600px;
  border: 1pt solid #323232;
}
</style>
