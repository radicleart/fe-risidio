<template>
<section :class="bgClass" class="" v-if="content" :style="viewportDimensions" id="section-11">
  <div class="card-container">
    <div v-if="$route.name != 'products'"><h1>Related projects</h1></div>
    <div class="row text-center card-row mx-auto">
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex justify-content-center" v-for="(item, index) of relatedProducts()" :key="index">
          <b-card
            :title="item.group_item_title[0].text"
            :img-src="item.item_image.url"
            img-alt="Product Representation Image"
            img-top
            tag="article"
            class="text-left card-style">
            <b-card-text>
              {{item.item_main_text[0].text}}
            </b-card-text>
            <div class="d-flex">
              <div v-if="productUrl(item) == '/projects/ruma'" class="more-text d-none"><span class="text-info">{{item.item_sub_text[0].text}}</span></div>
              <div v-else-if="productUrl(item) == '/projects/number-one'" class="d-none"></div>
              <div v-else class="more-text"><router-link :to="productUrl(item)" class="text-info">{{item.item_sub_text[0].text}}</router-link></div>
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
  name: 'ProdSection11',
  props: ['viewportDimensions', 'content', 'bgClass'],
  data () {
    return {
      numberOfItems: 4
    }
  },
  methods: {
    productUrl (item) {
      return '/projects/' + item.product_name[0].text
    },
    demoLink (item) {
      const productId = item.product_name[0].text
      if (productId === 'r-pay') {
        return '<a class="text-warning" href="/rpay-demo">Try it now</a>'
      } else if (productId === 'loopbomb') {
        return '<a class="text-warning" href="https://loopbomb.com">Try it now</a>'
      } else if (productId === 'dsearch') {
        return '<a class="text-warning" href="https://github.com/radicleart/brightblock-search">Find Us On Github</a>'
      } else if (productId === 'r-stack') {
        return '<a class="text-warning" href="https://stacks.risidio.com">Get Stacking</a>'
      } else if (productId === 'number-one') {
        return '<a class="text-info" href="https://thisisnumberone.com/">Find Out More</a>'
      } else if (productId === 'ruma') {
        return '<a class="text-warning" href="https://ruma.risidio.com/">Try now!</a>'
      } else {
        return null
      }
    },
    relatedProducts () {
      const arr = this.content.group_set
      const arr1 = []
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].product_name[0].text !== this.$route.params.productId) {
          arr1.push(arr[i])
        }
      }
      if (this.$route.name === 'product') {
        arr1.splice(this.numberOfItems)
      }
      return arr1
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
h1 {
  margin-bottom: 40px;
}
.tagline {
  text-align: center;
  font-size: 17px;
  font-weight: 300;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-transform: capitalize;
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
  height: 130px;
}
.card-img-top {
  height: auto;
  border-radius: 0;
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
