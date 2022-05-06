<template>
<section id="homesection5" class="bg-secondary">
  <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
    <div class="my-auto text-center text-white main-container">
      <div class="mb-2"><img class="section5-banner" :src="section5.image.url" alt=""/></div>
      <prismic-rich-text class="main-content mt-4" :field="section5.content"/>
      <div class="d-flex justify-content-center">
      <section-sendinblue></section-sendinblue>
      </div>
    </div>
  </div>
</section>
</template>

<script>

import SectionSendinblue from './SectionSendinblue.vue'
export default {
  name: 'section5',
  components: {
    SectionSendinblue
  },
  props: ['viewportDimensions'],
  data () {
    return {
    }
  },
  computed: {
    section5 () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section5[0]
    }
  }
}
</script>

<style lang="scss" scoped>
.section5-banner {
  max-width: 353px;
  width: 100%;
}
.text-on-mobile {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
.main-container {
  width: 70%;
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
  background: #5fbdc1 0% 0% no-repeat padding-box;
  border-radius: 22px;
}
button {
  &:hover {
    background: white 0% 0% no-repeat padding-box;
  }
  &:hover .call-button-text {
    color: #5fbdc1;
  }
}
.call-button-text {
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0px;
  color: #ffffff;
}
.button1 {
  width: 141px;
  height: 43px;
  background: rgb(255, 255, 255, 0.2) 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 22px;
}
.button1 {
  &:hover {
    background: white 0% 0% no-repeat padding-box;
  }
  & .call-button-text {
    color: #5fbdc1;
  }
  &:hover .call-button-text {
    color: #5fbdc1;
  }
}
</style>
