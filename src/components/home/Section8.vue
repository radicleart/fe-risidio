<template>
    <section :style="bannerImage" id="contactSection">
      <div class="mx-5 px-5 d-flex align-items-center flex-column mobile-gap" :style="viewportDimensions">
        <div class="my-auto text-center text-white">
          <div class="my-4"><h1 class="text-white">{{content.contact_title[0].text}}</h1></div>
          <div class="mb-3"><h2 class="text-white">{{content.contact_subtitle[0].text}}</h2></div>
          <div class="mb-4 blurb"><span>{{content.contact_description[0].text}}</span></div>
          <div class="m-5 d-flex justify-content-center">
            <a v-lazyload title="join us on discord" class="mr-4" :href="content.contact_discord_link[0].text"><img :data-url="social.discord.dark" alt="discord-icon" @mouseover="hoverOver(social.discord, $event)" @mouseout="hoverOut(social.discord, $event)" /></a>
            <a v-lazyload title="send an email" :href="'mailTo:' + content.contact_email_address[0].text"><img :data-url="social.mail.dark" alt="mail-icon" @mouseover="hoverOver(social.mail, $event)" @mouseout="hoverOut(social.mail, $event)" /></a>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { SITE_CONSTANTS } from '@/site-constants'

export default {
  name: 'Section8',
  components: {
  },
  props: ['viewportDimensions'],
  data () {
    return {
      bgStatic: require('@/assets/img/Group994.svg'),
      mailp: require('@/assets/img/Group 15784/Group 15784.png'),
      discordp: require('@/assets/img/Group 15783/Group 15783.png'),
      social: {
        discord: {
          dark: require('@/assets/img/Group 15783.svg'),
          light: require('@/assets/img/Group 15783Light.svg')
        },
        mail: {
          dark: require('@/assets/img/Group 15784.svg'),
          light: require('@/assets/img/Group 15784Light.svg')
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
    content () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content
    },
    bannerImage () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      const content = this.$store.getters['contentStore/getPage']('products')
      if (!content) {
        return
      }
      if (this.$route.name === 'home') {
        return {
          padding: '40px 0 0 0',
          height: height + 'px',
          width: '100%',
          position: 'relative',
          top: '0px',
          'background-color': 'transparent',
          'background-repeat': 'no-repeat',
          'background-position': 'center center',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
          '-o-background-size': 'cover',
          'background-size': 'cover',
          opacity: 1
        }
      } else {
        return {
          padding: '40px 0 0 0',
          height: height + 'px',
          width: '100%',
          position: 'relative',
          top: '0px',
          'background-image': `url(${this.bgStatic})`,
          'background-repeat': 'no-repeat',
          'background-position': 'center center',
          '-webkit-background-size': 'cover',
          '-moz-background-size': 'cover',
          '-o-background-size': 'cover',
          'background-size': 'cover',
          opacity: 1
        }
      }
    },
    mailImage () {
      return {
        height: '50px',
        width: '50px',
        'background-repeat': 'no-repeat',
        'background-image': `url(${this.mailp})`,
        'background-position': 'center center',
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      }
    },
    discordImage () {
      return {
        height: '50px',
        width: '50px',
        'background-repeat': 'no-repeat',
        'background-image': `url(${this.discordp})`,
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

<style scoped>
img {
  width: 78px;
  height: 78px;
}
.blurb {
  width: 256px;
}

@media only screen and (max-width:425px) {
  .mobile-gap { padding: 0 !important; }
  img {
    width: 70px;
    height: 70px;
  }
}

@media only screen and (max-width:320px) {
  img {
    width: 65px;
    height: 65px;
  }
}
</style>
