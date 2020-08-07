<template>
<section :class="bgClass" class="" v-if="content" :style="viewportDimensions">
  <div class="d-flex justify-content-center card-container">
    <div class="row text-center card-row">
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex justify-content-center" v-for="(item, index) of content.group_set" :key="index">
          <b-card
            :title="item.group_item_title[0].text"
            :img-src="item.item_image.url"
            img-alt="Image"
            img-top
            tag="article"
            class="text-left card-style">
            <b-card-text>
              {{item.item_main_text[0].text}}
            </b-card-text>
            <div class="d-flex">
              <div class="more-text"><router-link :to="productUrl(item)" class="text-info">{{item.item_sub_text[0].text}}</router-link></div>
              <div class="more-text" v-html="demoLink(item)"></div>
            </div>
          </b-card>
        </div>
    </div>
  </div>
</section>
</template>

<script>

export default {
  name: 'Section11',
  props: ['viewportDimensions', 'content', 'bgClass'],
  data () {
    return {
    }
  },
  methods: {
    productUrl (item) {
      return '/products/' + item.product_name[0].text
    },
    demoLink (item) {
      const productId = item.product_name[0].text
      if (productId === 'lsat') {
        return '<a class="text-warning" href="/lsat-demo">Try it now</a>'
      } else if (productId === 'loopbomb') {
        return '<a class="text-warning" href="https://loopbomb.com">Try it now</a>'
      } else if (productId === 'nongibles') {
        return '<a class="text-warning" href="https://radicle.art">Try it now</a>'
      } else if (productId === 'dsearch') {
        return '<a class="text-warning" href="https://github.com/radicleart/brightblock-search">Find Us On Github</a>'
      } else if (productId === 'hubber') {
        return '<a class="text-warning" href="https://github.com/radicleart/brightblock-gaia">Find Us On Github</a>'
      } else {
        return null
      }
    }
  },
  computed: {
  }
}
</script>

<style scoped>
/*
img {
  width: 100%;
  height: auto;
}
*/
.tagline {
  text-align: center;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-transform: capitalize;
  opacity: 1;
}
.card-container {
  padding: 8rem 3rem 3rem;
}
.card-row {
  max-width: 988px;
}
.card {
  border: none;
  width: 217px;
  min-width: 217px;
  margin-bottom: 80px;
}
.card-body {
  padding: 1.25rem 0 0;
}
.card-title {
  white-space: nowrap;
}
.card-text {
  height: 90px;
}
.card-img-top {
  height: auto;
}
.more-text:first-child {
  margin-right: 17px;
}
@media only screen and ( max-width:575px ) {
  .card-text {
    height: auto;
  }
}
</style>
