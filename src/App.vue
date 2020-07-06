<template>
<div id="app" v-if="homepage">
  <div v-if="loading" :style="introScreen">&nbsp;</div>
  <div :key="componentKey" v-else>
    <video v-if="homepage" autoplay muted loop id="myVideo" :style="sectionDimensions">
      <source :src="bgvideo" type="video/mp4">
    </video>
    <router-view class="navbar" name="header" @scrollMeTo="scrollMeTo($event)"/>
    <router-view class="main" id="nav"/>
    <router-view name="footer" />
  </div>
</div>
<div id="app" v-else class="">
  <div :key="componentKey">
    <router-view class="navbar" name="header" @scrollMeTo="scrollMeTo($event)"/>
    <router-view class="main" id="nav"/>
    <router-view name="footer" />
  </div>
  <notifications group="egs" ignoreDuplicates="true" type="info" duration="10" closeOnClick="true" position="top left" width="40%" />
</div>
</template>
<script>
import { SITE_CONSTANTS } from '@/site-constants'
import Vue from 'vue'

export default {
  name: 'App',
  data () {
    return {
      loading: true,
      componentKey: 0,
      intro: 'https://images.prismic.io/risidio-journal/eaa18988-76ae-4891-a832-5d4d8dea849c_intro-gif.gif?auto=compress,format',
      bgvideo: 'https://prismic-io.s3.amazonaws.com/risidio-journal/cbeb0c74-cb5d-4516-b65e-5e81d331e34c_wesite+background_Hi-res.mp4'
    }
  },
  mounted () {
    if (this.$route.name === 'home') {
      setTimeout(() => {
        this.loading = false
        this.startVideo()
      }, 3000)
    } else {
      this.loading = false
      this.startVideo()
    }
    let resizeTimer
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const myself = this
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(function () {
        myself.$store.commit('setWinDims')
        myself.componentKey += 1
      }, 400)
    })

    this.$prismic.client.getSingle('homepage').then(document => {
      if (document) {
        this.$store.commit('contentStore/addHomeContent', document.data)
      }
    })
    this.$prismic.client.getSingle('navigation').then(document => {
      if (document) {
        this.$store.commit('contentStore/addNavigationContent', document.data)
        this.$prismic.client.query(
          this.$prismic.Predicates.at('document.type', 'page'),
          { pageSize: 20, page: 1 }
        ).then((response) => {
          this.$store.commit('contentStore/addPages', response.results)
        })
        this.$prismic.client.query(
          this.$prismic.Predicates.at('document.type', 'product'),
          { pageSize: 20, page: 1 }
        ).then((response) => {
          this.$store.commit('contentStore/addProducts', response.results)
        })
      }
    })
  },
  methods: {
    scrollMeTo (data) {
      const element = document.getElementById(data.refName)
      const top = element.offsetTop
      window.scrollTo(0, top)
    },
    startVideo () {
      Vue.nextTick(function () {
        const video = document.getElementById('myVideo')
        if (video) {
          if (video.paused) {
            video.play()
          } else {
            video.pause()
          }
        }
      }, this)
    }
  },
  computed: {
    sectionDimensions () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + (height) + 'px; width: auto;'
    },
    homepage () {
      return this.$route.name === 'home'
    },
    introScreen () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return {
        height: height + 'px',
        'background-repeat': 'no-repeat',
        'background-image': `url(${this.intro})`,
        'background-position': 'center center',
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      }
    }
  }
}
</script>
<style>
</style>
<style lang="scss">
#myVideo {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  z-index: -100;
}
#app {
  z-index: -110;
}
/* Add some content at the bottom of the video/page */
.navbar {
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 70px;
}

/* Style the button used to pause/play the video */
#myBtn {
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
}
.content {
  position: fixed;
  bottom: 0;
  width: 100%;
}

#myBtn:hover {
  background: #ddd;
  color: black;
}

</style>
