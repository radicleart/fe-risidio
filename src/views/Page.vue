<template>
<div class="home" v-if="content">
  <h1 class="mb-5">{{content.data.page_title[0].text}}</h1>
  <div class="row">
    <div class="col-3"><img width="450px" :src="content.data.banner.url"/></div>
    <div class="col-9">{{content.data.page_text[0].text}}</div>
  </div>
  <div class="d-flex justify-content-center">
    <div class="row" v-if="content.data.group_set">
      <div class="col-6" v-for="(item, index) of content.data.group_set" :key="index">
        <b-card-group class="mb-3">
          <b-card header-tag="header" footer-tag="footer">
            <b-card-text class="text-center d-flex justify-content-center border-bottom py-3 text-dark">
              <div>
                <div></div>
                <h2>{{item.group_item_title[0].text}}</h2>
              </div>
            </b-card-text>
            <b-card-text class="mt-4" style="height: auto; font-size: 1.2rem;">
              <div class="row">
                <div class="col-3">
                  <font-awesome-icon size="5x"  :icon="icons[index]" transform="shrink-6" class="" />
                </div>
                <div class="col-9">
                  <prismic-items :prismicItems="item.group_item"/>
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

export default {
  name: 'Home',
  data () {
    return {
      pageId: null,
      icons: ['bahai', 'bahai', 'bahai', 'bahai']
    }
  },
  components: {
    PrismicItems
  },
  watch: {
    '$route' () {
      this.pageId = this.$route.params.pageId
    }
  },
  mounted () {
    this.pageId = this.$route.params.pageId
  },
  computed: {
    content () {
      const content = this.$store.getters['contentStore/getPage'](this.pageId)
      if (content) console.log('content: ' + content.data.group_set[0].group_item_title[0].text)
      return content
    }
  }
}
</script>
<style scoped>
</style>
