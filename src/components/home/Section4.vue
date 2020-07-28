<template>
    <section class="bg-white">
      <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
        <div class="my-auto text-center">
          <div class="mb-5 mt-5 pb-4"><h1 class="text-black">{{content.section4_title[0].text}}</h1></div>
          <div class="px-5 row text-center mobileView">
            <div class="col-md-4 col-sm-12 col-xs-12 mb-5" v-for="(item, index) in group" :key="index">
              <div class="row">
                <div class="col-3">
                  <div class="whatsit" :class="'bg-' + getBgClass(index)"><img class="p-3" :src="features[index]" /></div>
                </div>
                <div class="col-8 text-left">
                  <div class="d-flex align-items-start flex-column" style="height: 230px;">
                    <h1 class="text-black mb-3 ">{{item.title1[0].text}}</h1>
                    <h2 class="text-black">{{item.title2[0].text}}</h2>
                    <p class="text-black mb-auto">{{item.description[0].text}}</p>
                    <div class="more-text"><router-link to="/about" :class="'text-' + getBgClass(index)">{{item.more[0].text}}</router-link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Section4',
  components: {
  },
  props: ['viewportDimensions'],
  data () {
    return {
      features: [
        require('@/assets/img/xd/bitcoin.svg'),
        require('@/assets/img/xd/report.svg'),
        require('@/assets/img/xd/Page-1.svg')
      ]
    }
  },
  methods: {
    getBgClass: function (index) {
      if (index === 0) {
        return 'warning'
      } else if (index === 1) {
        return 'info'
      } else {
        return 'danger'
      }
    }
  },
  computed: {
    group () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section4_group
    },
    content () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content
    }
  }
}
</script>

<style scoped>
.whatsit {
  width: 72px;
  height: 72px;
  border-radius: 50%;
}

@media only screen and (max-width: 1000px) and (min-width:801px) {
  .whatsit img { height: 60px; }
  .whatsit { height: 61px; width: 61px; }
}

@media only screen and (max-width: 800px) and (min-width: 768px) {
  .whatsit img { height: 55px; }
  .whatsit { height: 56px; width: 56px; }
  .mobileView { padding:0 2rem !important; }
}

@media only screen and (max-width: 767px) {
  p { margin-bottom: 2rem !important; }
}

@media only screen and (max-width: 375px) {
  h1 { font-size: 12px; }
  h2 { font-size: 36px; }
  .whatsit img { height: 60px; }
  p { font-size: 12px; }
  .whatsit { height: 61px; width: 61px; }
}

@media only screen and (max-width: 320px) {
  h2 { font-size: 22px; }
  .mobileView { padding:0 2rem !important; }
}

</style>
