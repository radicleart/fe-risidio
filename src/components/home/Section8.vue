<template>
    <section class="bg-ones" id="contactSection">
      <div class="mx-5 px-5 d-flex align-items-center flex-column" :style="viewportDimensions">
        <div class="my-auto text-center text-white">
          <div class="my-4"><h1 class="text-white">{{content.contact_title[0].text}}</h1></div>
          <div class="mb-3"><h2 class="text-white">{{content.contact_subtitle[0].text}}</h2></div>
          <div class="mb-4 blurb"><span>{{content.contact_description[0].text}}</span></div>
          <div class="m-5 d-flex justify-content-center">
            <a title="join us on discord" class="mr-4" :href="content.contact_discord_link[0].text"><img :src="social.discord.dark" @mouseover="hoverOver(social.discord, $event)" @mouseout="hoverOut(social.discord, $event)" /></a>
            <a title="send an email" :href="'mailTo:' + content.contact_email_address[0].text"><img :src="social.mail.dark" @mouseover="hoverOver(social.mail, $event)" @mouseout="hoverOut(social.mail, $event)" /></a>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Section8',
  components: {
  },
  props: ['viewportDimensions'],
  data () {
    return {
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
</style>
