<template>
<section :class="bgClass" class="" v-if="content" :style="viewportDimensions">
  <div class="d-flex justify-content-center p-5">
    <div class="mx-5 row text-center">
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4" v-for="(item, index) of content.group_set" :key="index">
          <b-card
            :title="item.group_item_title[0].text"
            :img-src="item.item_image.url"
            img-alt="Image"
            img-top
            tag="article"
            style="min-width: 15rem;"
            class="mb-2 text-left">
            <b-card-text>
              {{item.item_main_text[0].text}}
            </b-card-text>
            <div class="d-flex justify-content-between">
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
        return '<a class="text-warning" href="/lsat-demo">Try The Demo</a>'
      } else if (productId === 'loopbomb') {
        return '<a class="text-warning" href="https://loopbomb.com">Try The Demo</a>'
      } else if (productId === 'nongibles') {
        return '<a class="text-warning" href="https://radicle.art">Try The Demo</a>'
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
.card-title {
  white-space: nowrap;
}
.card-text {
  height: 100px;
}
.card-img-top {
  height: 300px;
}
</style>
