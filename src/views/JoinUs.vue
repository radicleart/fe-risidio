<template>
<section class="bg-white" :sectionDimensions="sectionDimensions">
  <div :style="bannerImage" class="d-flex align-items-center flex-column">
    <div class="my-auto text-center">
      <h2 class="mb-3 text-white">{{ content.title[0].text }}</h2>
      <p class="text-white">{{ content.subtitle[0].text }}</p>
    </div>
  </div>
  <div class="d-flex align-items-center flex-column">
    <div class="join-first-section join-content-container">
      <h3 class="text-center mb-3">{{ content.subheading_1[0].text }}</h3>
      <p class="text-center">{{ content.first_paragraph[0].text }}</p>
      <p class="text-center">{{ content.first_paragraph[1].text }}</p>
    </div>
    <div class="join-second-section join-content-container">
      <h3 class="text-center mb-3">{{ content.subheading_2[0].text }}</h3>
      <p class="text-center mb-0">{{ content.second_paragraph[0].text }}</p>
    </div>
    <div class="join-third-section">
      <div class="intenship-info__container">
        <div class="intenship-info" v-for="(item, index) of content.job_desctiptions" :key="index">
          <div class="intenship-info__content-container">
            <div class="intenship-info__button--container"><button v-b-toggle="'collapse' + index" class="intenship-info__button"><span class="intenship-info__title">{{ item.job_title[0].text }}</span><b-icon icon="geo-alt" class="mr-2"></b-icon>{{ item.location[0].text }}<b-icon icon="plus" font-scale="1.8" class="ml-auto"></b-icon></button></div>
            <b-collapse :id="'collapse' + index" class="intenship-info__collapse">
              <div class="intenship-info__collapse--content">
                <div v-for="(item2, index2) of item.job_brief" :key="index2"><div v-html="item2.text"></div></div>
              </div>
            </b-collapse>
          </div>
        </div>
      </div>
      <p class="text-center join-important-note" v-html="content.note[0].text"></p>
    </div>
  </div>
  <div class="join-fouth-section">
    <section8 :viewportDimensions="sectionDimensions"/>
  </div>
</section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'
import Section8 from '@/components/home/Section8'

export default {
  name: 'join-us',
  components: {
    Section8
  },
  data () {
    return {
      banner: require('@/assets/img/join_us_banner.png')
    }
  },
  computed: {
    bannerImage () {
      // const content = this.$store.getters['contentStore/getPage']('bloghome')
      return {
        padding: '80px 0 0 0',
        height: '320px',
        width: '100%',
        position: 'relative',
        top: '0px',
        'background-repeat': 'no-repeat',
        'background-image': `url(${this.banner})`,
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
      const content = this.$store.getters['contentStore/getRecruitment']
      return content
    }
  },
  methods: {
  }
}
</script>

<style>

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

.join-important-note {
  font-size: 18px;
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

  .join-important-note {
    font-size: 14px;
  }

}

@media only screen and (max-width: 321px) {

  .intenship-info__button .bi-plus {
    margin-left: 5px !important;
  }

}

</style>
