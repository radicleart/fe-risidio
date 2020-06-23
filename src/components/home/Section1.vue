<template>
<section>
  <div class="d-flex justify-content-center" :style="sectionDimensions">
      <div class=" d-flex align-items-center flex-column" :style="sectionDimensions">
        <div class="my-auto text-center">
          <div class="mb-auto d-flex align-items-center flex-column">
            <div class="ml-0"><img ref="img1" height="80px" :src="iwords.ione.dark" @mouseover="hoverOver(iwords.ione, $event)" @mouseout="hoverOut(iwords.ione, $event)" /></div>
            <div class="ml-5"><img class="ml-5" ref="img2" height="80px" :src="iwords.itwo.dark" @mouseover="hoverOver(iwords.itwo, $event)" @mouseout="hoverOut(iwords.itwo, $event)" /></div>
            <div class="ml-4"><img ref="img3" height="80px" :src="iwords.ithree.dark" @mouseover="hoverOver(iwords.ithree, $event)" @mouseout="hoverOut(iwords.ithree, $event)" /></div>
          </div>
        </div>
      </div>
  </div>
</section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'Section1',
  data () {
    return {
      iwords: {
        ione: {
          light: require('@/assets/img/xd/innovate_light.png'),
          dark: require('@/assets/img/xd/innovate_dark.png')
        },
        itwo: {
          light: require('@/assets/img/xd/involve_light.png'),
          dark: require('@/assets/img/xd/involve_dark.png')
        },
        ithree: {
          light: require('@/assets/img/xd/inspire_light.png'),
          dark: require('@/assets/img/xd/inspire_dark.png')
        }
      }
    }
  },
  methods: {
    hoverOver: function (img, ev) {
      ev.currentTarget.src = img.light
    },
    hoverOut: function (img, ev) {
      ev.currentTarget.src = img.dark
    }
  },
  computed: {
    sectionDimensions () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + height + 'px; width: auto;'
    }
  }
}
</script>

<style scoped>
</style>
