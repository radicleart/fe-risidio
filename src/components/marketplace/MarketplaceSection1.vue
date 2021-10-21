<template>
<section class="d-flex justify-content-center bg-lighter py-5" v-if="section1" :style="viewportDimensions" id="product-section-1">
  <div class="d-flex justify-content-center flex-column">
    <div class="container">
      <div class="row">
        <div class="col-6 text-right d-md-block d-none">
          <img :src="section1.image.url" :alt="section1.image.alt"/>
        </div>
        <div class="col-md-6 col-sm-12 three-paragraphs-col">
          <prismic-rich-text class="main-content" :field="section1.content"/>
          <img :src="section1.image.url" :alt="section1.image.alt" class="d-md-none d-block"/>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'MarketplaceSection1',
  props: ['viewportDimensions', 'section1'],
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>
img {
  width: 310px;
  margin-right: 40px;
}

.main-content >>> h1 {
  text-align: left;
  margin-bottom: 3rem;
}
.main-content >>> p {
  margin-bottom: 25px;
}

@media only screen and (max-width:767px) {
  .main-content >>> h1 {
    text-align: center;
  }
  img {
    margin: 30px auto 0;
  }
  .three-paragraphs-col {
    margin: 40px 0;
    margin-left: 10px;
  }
}
@media only screen and (max-width:425px) {
  .container {
    padding: 0;
  }
}
</style>
