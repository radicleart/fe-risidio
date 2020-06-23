<template>
    <section class="bg-white">
      <div class="mx-5 px-5 d-flex align-items-center flex-column" :style="sectionDimensions">
        <div class="my-auto text-center">
          <div class="mb-5"><span style="font-weight: 900; font-size: 1.6rem;">{{content.section4_title[0].text}}</span></div>
          <div class="row text-center">
            <div class="col-md-4 col-sm-12 col-xs-12 mb-5" v-for="(item, index) in group" :key="index">
              <div class="row">
                <div class="col-4 text-center mb-4">
                  <div class="whatsit" :class="'bg-' + getBgClass(index)"><img class="p-3" :src="features[index]" /></div>
                </div>
                <div class="col-8 text-left">
                  <div class="d-flex align-items-start flex-column" style="height: 230px;">
                    <h2>{{item.title1[0].text}}</h2>
                    <h3>{{item.title2[0].text}}</h3>
                    <p class="mb-auto">{{item.description[0].text}}</p>
                    <div class=" more"><router-link to="/about" :class="'text-' + getBgClass(index)">{{item.more[0].text}}</router-link></div>
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
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'Section4',
  components: {
  },
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
      if (index === 1) {
        return 'warning'
      } else if (index === 2) {
        return 'info'
      } else {
        return 'danger'
      }
    }
  },
  computed: {
    sectionDimensions () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + height + 'px; width: auto;'
    },
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
h2 {
  font-size: 12px;
  font-weight: 800;
}
h3 {
  font-size: 36px;
  font-weight: 200;
  white-space: nowrap;
}
p {
  font-size: 12px;
  font-weight: 400;
}
.more {
  font-size: 11px;
  font-weight: 800;
}
.whatsit {
  width: 72px;
  height: 72px;
  border-radius: 50%;
}
</style>
