<template>
<div v-if="content">
    <section class="d-flex align-items-center flex-column" id="proposal-title" :style="sectionBanner">
        <div class="my-auto text-center text-white w-75">
          <h2 class="mb-4">{{ content.title[0].text }}</h2>
          <h1>{{ content.subtitle[0].text }}</h1>
        </div>
    </section>
    <section id="proposal-description" :style="sectionDimensions">
        <div class="d-flex align-items-center flex-column main-content">
            <div class="main-content--wrapper">
              <div v-for="(item, index) of content.description" :key="index">
                <div v-html="item.text"></div>
              </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'Proposal',
  mounted () {
    console.log(this.$route)
  },
  computed: {
    sectionDimensions () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + height + 'px; width: auto;'
    },
    sectionBanner () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return {
        padding: '40px 0 0 0',
        'min-height': height / 2 + 89 + 'px',
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
        'background-color': '#121212'
      }
    },
    content () {
      const content = this.$store.getters['contentStore/getProposal']
      return content
    }
  }
}
</script>

<style lang="scss">
#proposal-description {

  & .main-content {
    background-color: white;
  }

  & .main-content--wrapper {
    width: 80%;
    margin: 0 auto;
    padding: 50px 0;
  }

  & h2 {
    margin: 3rem 0 2rem;
  }

  & h3 {
    margin: 2rem 0 1rem;
  }

  & h4 {
    margin: 2rem 0 1rem;
    text-align: left;
  }

  & img {
    max-width: 50%;
    height: auto;
    margin: 5rem 0;
  }

  & table, th, td {
    border: 1px solid #000;
  }

    & table p {
    margin: 0 5px 0;
  }

}

</style>
