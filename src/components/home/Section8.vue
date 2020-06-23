<template>
    <section style="background-color: #212121">
      <div class="mx-5 px-5 d-flex align-items-center flex-column" :style="sectionDimensions">
        <div class="my-auto text-center text-white">
          <div class="mb-4"><h2>{{content.contact_title[0].text}}</h2></div>
          <div class="mb-2"><h3>{{content.contact_subtitle[0].text}}</h3></div>
          <div class="joinus-desc w-100"><span>{{content.contact_description[0].text}}</span></div>
          <div class="m-5 d-flex justify-content-center">
            <div><a title="join us on discord" :href="content.contact_discord_link[0].text"><i class="text-secondary fa-3x mr-5 fab fa-discord"></i></a></div>
            <div><a class="pb-3" title="send an email" :href="'mailTo:' + content.contact_email_address[0].text"><i class="text-secondary fa-3x fa fa-envelope"></i></a></div>
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
  data () {
    return {
    }
  },
  computed: {
    sectionDimensions () {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT]
      return 'min-height: ' + height + 'px; width: auto;'
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
  font-size: 17px;
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
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0 20px;
}
.joinus-desc {
  margin: 50px 0 0 0;
  padding: 0 200px;
}
@media only screen and (max-width: 900px) {
  .joinus-desc {
    margin: 50px 0 0 0;
    padding: 10px 20px;
  }
}

.whatsit {
  width: 72px;
  height: 72px;
  border-radius: 50%;
}
</style>
