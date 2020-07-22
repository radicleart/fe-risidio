<template>
    <section class="bg-white">
      <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
        <div class="my-auto text-center">
          <div class="mb-5 mt-5 pb-4"><h1 class="text-black">{{content.section4_title[0].text}}</h1></div>
          <div class="px-5 row text-center">
            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 mb-5" v-for="(item, index) in group" :key="index">
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

@media only screen and (max-width: 991px) {
  .col-3 {
    display: flex;
    justify-content: flex-end;
  }
}

@media only screen and (max-width: 768px) {
  p { margin-bottom: 2rem !important; }
}

@media only screen and (max-width: 375px) {
  .whatsit img { height: 60px; }
  .whatsit { height: 61px; width: 61px; }
}
</style>
