<template>
<section class="bg-white" v-if="content" :style="viewportDimensions">
  <div class="p-5 d-flex justify-content-center">
    <div class="row text-center">
        <div class="col-md-4 col-sm-6 col-xs-12" v-for="(item, index) of content.group_set" :key="index">
          <b-card
            :title="item.group_item_title[0].text"
            :img-src="item.item_image.url"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 text-left">
            <b-card-text>
              {{item.item_main_text[0].text}}
            </b-card-text>
            <div class="more-text"><router-link :to="productUrl(item)" class="text-info">{{item.item_sub_text[0].text}}</router-link></div>
          </b-card>
        </div>
    </div>
  </div>
</section>
</template>

<script>

export default {
  name: 'Section11',
  props: ['viewportDimensions', 'content'],
  data () {
    return {
    }
  },
  methods: {
    productUrl (item) {
      return '/products/' + item.product_name[0].text
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
  min-height: 100px;
}
.card-img-top {
  height: 300px;
}
</style>
