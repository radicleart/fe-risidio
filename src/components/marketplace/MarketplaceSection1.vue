<template>
<section class="d-flex justify-content-center bg-lighter" v-if="content" :style="viewportDimensions" id="product-section-1">
  <div class="d-flex justify-content-center flex-column">
    <div class="container">
      <div class="row">
        <div class="col-6 text-right d-md-block d-none">
          <img :src="content.section1_image.url" :alt="content.section1_image.alt"/>
        </div>
        <div class="col-md-6 col-sm-12 three-paragraphs-col">
          <h1 class="mb-5">{{content.section1_title[0].text}}</h1>
          <div class="three-paragraphs" v-for="(item, index) of content.section1" :key="index">
            <template v-if="index == 1">
              <div class="d-flex p-img-container">
                <div>
                  <h2 v-html="item.tile[0].text"></h2>
                  <p v-html="item.description1[0].text"></p>
                </div>
                <div class="d-block d-md-none">
                  <img :src="content.section1_image.url" :alt="content.section1_image.alt"/>
                </div>
              </div>
            </template>
            <template v-else>
              <h2 v-html="item.tile[0].text"></h2>
              <p v-html="item.description1[0].text"></p>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'MarketplaceSection1',
  props: ['viewportDimensions', 'content'],
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
h1 {
  text-align: left;
}
img {
  width: 310px;
  margin-right: 40px;
}
.three-paragraphs {
  margin-bottom: 21px;
}
.button-contaner {
  margin-top: 11px;
  margin-bottom: 0;
}
.button-contaner button:hover {
  color: #ffffff;
}

.button-contaner--xchange {
  width: 100%;
  text-align: center;
}
.button-contaner--xchange button {
  max-width: 700px;
  min-width: 300px;
  width: 100%;
}

.p-img-container div {
  padding: 0;
}

.product--gap {
  width: auto;
}

@media only screen and (max-width:767px) {
  h1 {
    text-align: center;
  }
  .button-contaner {
    text-align: center;
  }
  img {
    width: 124px;
    margin: 0 0 0 21px;
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
  .button-contaner--xchange {
    margin-bottom: 20px;
  }
  .button-contaner--xchange button {
    width: auto;
  }
}
</style>
