<template>
    <section :style="bannerImage" id="contactSection">
      <div class="mx-5 px-5 d-flex align-items-center flex-column" :style="viewportDimensions">
        <div class="my-auto text-center text-white">
          <div class="my-4"><h1 class="text-white">{{content.contact_title[0].text}}</h1></div>
          <div class="mb-3"><h2 class="text-white">{{content.contact_subtitle[0].text}}</h2></div>
          <div class="mb-4 blurb"><span>{{content.contact_description[0].text}}</span></div>
          <div class="m-5 d-sm-flex d-none justify-content-center">
            <a title="Join us on Discord" class="mr-sm-4 mr-3" :href="content.contact_discord_link[0].text"><img :src="social.discord.dark" alt="Discord Icon" @mouseover="hoverOver(social.discord, $event)" @mouseout="hoverOut(social.discord, $event)" /></a>
            <a title="Send an email" class="mr-sm-4 mr-3" :href="'mailTo:' + content.contact_email_address[0].text"><img :src="social.mail.dark" alt="Mail Icon" @mouseover="hoverOver(social.mail, $event)" @mouseout="hoverOut(social.mail, $event)" /></a>
            <a title="Join us on Instagram" class="mr-sm-4 mr-3" :href="content.contact_instagram_link[0].text"><img :src="social.instagram.dark" alt="Instagram Icon" @mouseover="hoverOver(social.instagram, $event)" @mouseout="hoverOut(social.instagram, $event)" /></a>
            <a title="Watch us on YouTube" class="mr-sm-4 mr-3" :href="content.contact_youtube_link[0].text"><img :src="social.youtube.dark" alt="Youtube Icon" @mouseover="hoverOver(social.youtube, $event)" @mouseout="hoverOut(social.youtube, $event)" /></a>
            <a title="Join us on LinkedIn" :href="content.contact_linkedin_link[0].text"><img :src="social.linkedin.dark" alt="Youtube Icon" @mouseover="hoverOver(social.linkedin, $event)" @mouseout="hoverOut(social.linkedin, $event)" /></a>
         </div>
          <div class="m-3 d-sm-none d-block justify-content-center">
            <div class="d-flex justify-content-center">
              <a title="Join us on Discord" class="mr-sm-4 mr-3" :href="content.contact_discord_link[0].text"><img :src="social.discord.dark" alt="Discord Icon" @mouseover="hoverOver(social.discord, $event)" @mouseout="hoverOut(social.discord, $event)" /></a>
              <a title="Send an email" class="mr-sm-4 mr-3" :href="'mailTo:' + content.contact_email_address[0].text"><img :src="social.mail.dark" alt="Mail Icon" @mouseover="hoverOver(social.mail, $event)" @mouseout="hoverOut(social.mail, $event)" /></a>
              <a title="Join us on Instagram" :href="content.contact_instagram_link[0].text"><img :src="social.instagram.dark" alt="Instagram Icon" @mouseover="hoverOver(social.instagram, $event)" @mouseout="hoverOut(social.instagram, $event)" /></a>
            </div>
            <div class="mt-2 d-flex justify-content-center">
              <a title="Watch us on YouTube" class="mr-sm-4 mr-3" :href="content.contact_youtube_link[0].text"><img :src="social.youtube.dark" alt="Youtube Icon" @mouseover="hoverOver(social.youtube, $event)" @mouseout="hoverOut(social.youtube, $event)" /></a>
              <a title="Join us on LinkedIn" :href="content.contact_linkedin_link[0].text"><img :src="social.linkedin.dark" alt="Youtube Icon" @mouseover="hoverOver(social.linkedin, $event)" @mouseout="hoverOut(social.linkedin, $event)" /></a>
            </div>
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
      social: {
        discord: {
          dark: require('@/assets/img/Group 15783.svg'),
          light: require('@/assets/img/Group 15783Light.svg')
        },
        mail: {
          dark: require('@/assets/img/Group 15784.svg'),
          light: require('@/assets/img/Group 15784Light.svg')
        },
        instagram: {
          dark: require('@/assets/img/Instagram black_bg.svg'),
          light: require('@/assets/img/Instagram white_bg.svg')
        },
        youtube: {
          dark: require('@/assets/img/YouTube black_bg.svg'),
          light: require('@/assets/img/YouTube white_bg.svg')
        },
        linkedin: {
          dark: require('@/assets/img/linkedin.svg'),
          light: require('@/assets/img/linkedin_hover.svg')
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
          'background-size': 'cover'
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
          'background-size': 'cover'
        }
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
  margin: 0 auto;
}

@media only screen and (max-width:425px) {
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
