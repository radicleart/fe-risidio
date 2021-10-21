<template>
<section class="bg-white" :sectionDimensions="sectionDimensions" v-if="content.banner">
  <div :style="bannerImage" class="d-flex align-items-center flex-column">
    <div class="my-auto text-center">
      <h2 class="mb-3 text-white">{{ content.title[0].text }}</h2>
      <p class="text-white">{{ content.tagline[0].text }}</p>
    </div>
  </div>
  <div class="d-flex align-items-center flex-column">
    <div class="join-first-section join-content-container">
      <prismic-rich-text class="joinus-main-content" :field="content.section1"/>
    </div>
    <div class="join-second-section join-content-container">
      <prismic-rich-text class="joinus-main-content" :field="content.section2"/>
    </div>
    <div class="join-third-section">
      <div class="intenship-info__container">
        <div class="intenship-info" v-for="(item, index) of content.section3" :key="index">
          <div class="intenship-info__content-container">
            <div @click="isExpand[index] = !isExpand[index]" :class="{plusIconAnimation : isExpand[index]}" class="intenship-info__button--container"><button v-b-toggle="'collapse' + index" class="intenship-info__button"><span class="intenship-info__title">{{ item.job_title[0].text }}</span><b-icon icon="geo-alt" class="mr-2"></b-icon>{{ item.location[0].text }}<b-icon icon="plus" font-scale="1.8" class="ml-auto plus-icon"></b-icon></button></div>
            <b-collapse :id="'collapse' + index" class="intenship-info__collapse">
              <div class="intenship-info__collapse--content">
                <prismic-rich-text class="joinus-s3-main-content" :field="item.content"/>
              </div>
            </b-collapse>
          </div>
        </div>
      </div>
      <prismic-rich-text class="join-important-note" :field="content.note"/>
    </div>
  </div>
  <div class="join-fouth-section">
    <section6 :viewportDimensions="sectionDimensions"/>
  </div>
</section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'
import Section6 from '@/components/home/Section6'

export default {
  name: 'join-us',
  components: {
    Section6
  },
  data () {
    return {
      isExpand: { 0: false, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false }
    }
  },
  computed: {
    bannerImage () {
      return {
        padding: '80px 0 0 0',
        height: '320px',
        width: '100%',
        position: 'relative',
        top: '0px',
        'background-repeat': 'no-repeat',
        'background-image': `url(${this.content.banner.url})`,
        'background-position': 'center center',
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover',
        'background-color': '#121212',
        opacity: 1
      }
    },
    sectionDimensions () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + height + 'px; width: auto;'
    },
    content () {
      const content = this.$store.getters['contentStore/getJoinUs']
      return content
    }
  },
  methods: {
  }
}
</script>

<style>
.joinus-main-content h3 {
  text-align: center;
}
.joinus-main-content p {
  text-align: center;
}
.join-content-container {
  width: 50%;
  margin: 0 auto;
}

.join-first-section {
  padding-top: 50px;
  padding-bottom: 50px;
}

.join-third-section {
  width: 80%;
  padding-bottom: 50px;
}

.join-important-note strong {
  font-weight: 700;
}
.join-important-note p {
  font-size: 18px;
  text-align: center;
}

.intenship-info__container {
  padding: 40px 0 12px;
}

.intenship-info {
  padding-bottom: 28px;
}

.intenship-info__content-container:not(:last-child) {
  margin-bottom: 28px;
}

.intenship-info__button--container {
  max-width: 568px;
  margin: 0 auto;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 31px;
}

.intenship-info__button {
  position: relative;
  display: flex;
  width: 100%;
  height: 62px;
  align-items: center;
  padding: 0 20px;
  font-size: 16px;
  color: #000;
  z-index: 5;
}

.intenship-info__button:hover {
  background: transparent;
}

.intenship-info__button .plus-icon {
  transition: all 0.3s;
}

.intenship-info .plusIconAnimation .plus-icon {
  transform: rotate(45deg);
}

.intenship-info__title {
  font-size: 18px;
  font-weight: 700;
  margin-right: 20px;
}

.intenship-info__collapse {
  max-width: 568px;
  /*position: relative;
  top: -27px;
  left: 31.35%;*/
  margin: -27px auto 0;
  background: #fff;
  box-shadow: 0px 3px 6px -4px #00000029,
              3px 3px 6px -4px #00000029,
              -3px 3px 6px -4px #00000029;
  border-radius: 0 0 31px 31px;
}

.intenship-info__collapse--content {
  padding: 32px 20px 20px;
}

.intenship-info__collapse--content h4 {
  text-align: left;
}

.intenship-info__collapse--content ul {
  padding-left: 20px;
  font-size: 12px;
  font-weight: 400;
}

.intenship-info__collapse--content p {
  font-size: 12px;
  font-weight: 400;
}

@media only screen and (max-width: 768px) {
  .join-content-container {
    width: 70%;
  }
}

@media only screen and (max-width: 426px) {

  .join-content-container {
    width: 80%;
  }

  .intenship-info__title {
    margin-right: 20px;
  }

  .intenship-info__button, .intenship-info__title {
    font-size: 12px;
  }

  .join-important-note p {
    font-size: 14px;
  }

}

@media only screen and (max-width: 321px) {

  .intenship-info__button .bi-plus {
    margin-left: 5px !important;
  }

}

</style>
