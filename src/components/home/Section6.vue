<template>
<section id="section6" class="bg-secondary">
  <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
    <div class="my-auto text-center text-white">
      <div v-lazyload class="mb-2"><img width="300px" :data-url="section6.image.url" :alt="section6.image.alt"/></div>
      <div class="my-4"><h1 class="text-white">{{section6.title[0].text}}</h1></div>
      <div class="mb-2"><h2 class="text-white h2-on-mobile">{{section6.subtitle[0].text}}</h2></div>
      <div class="mb-4"><p class="text-on-mobile">{{section6.description[0].text}}</p></div>
      <div class="d-flex justify-content-center">
        <div class="mr-4"><button v-scroll-to="{ element: '#contactSection', duration: 2000 }"><span class="call-button-text">{{section6.link1[0].text}}</span></button></div>
        <div><button class="button1" v-scroll-to="{ element: '#contactSection', duration: 2000 }"><span class="call-button-text">{{section6.link2[0].text}}</span></button></div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'Section6',
  components: {
  },
  props: ['viewportDimensions'],
  data () {
    return {
    }
  },
  computed: {
    section6 () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section6[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.text-on-mobile {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
p {
  text-align: center;
}
.more {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0 20px;
}
button {
  width: 141px;
  height: 43px;
  background: #5FBDC1 0% 0% no-repeat padding-box;
  border-radius: 22px;
}
button {
  &:hover {
    background: white 0% 0% no-repeat padding-box;
  }
  &:hover .call-button-text {
    color: #5FBDC1;
  }
}
.call-button-text {
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #FFFFFF;
}
.button1 {
  width: 141px;
  height: 43px;
  background: rgb(255, 255, 255, .2) 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 22px;
}
.button1 {
  &:hover {
    background: white 0% 0% no-repeat padding-box;
  }
  & .call-button-text {
    color: #5FBDC1;
  }
  &:hover .call-button-text {
    color: #5FBDC1;
  }
}
</style>
