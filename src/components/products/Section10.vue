<template>
<section id="section0" :style="bannerImage" v-if="content.banner">
  <div class="mt-5 d-flex align-items-center flex-column">
    <div class="my-auto text-center">
      <div class="mt-5"><h1 class="text-white">{{content.page_title[0].text}}</h1></div>
      <div class="mx-auto my-4 text-white w-75">
        <p class="text-center blurb2">{{content.page_text[0].text}}</p>
      </div>
      <div class="mx-auto my-4 text-white w-75">
        <p class="text-center text-large">{{content.page_text[1].text}}</p>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Section10',
  props: ['viewportDimensions', 'content'],
  data () {
    return {
    }
  },
  computed: {
    bannerImage () {
      return {
        padding: '40px 0 0 0',
        height: '400px',
        width: '100%',
        position: 'relative',
        top: '0px',
        'background-repeat': 'no-repeat',
        'background-image': `url(${this.content.banner.url})`,
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
.blurb1 {
  width: 450px;
  font-size: 14px;
}
.blurb2 {
  width: 100%;
  text-align: center;
  font-size: 26px;
  font-weight: 200;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
}
@media only screen and (max-width: 900px) {
  .quote {
    margin: 0 100px;
  }
}

.blurb3 {
  width: 100%;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
}
</style>
