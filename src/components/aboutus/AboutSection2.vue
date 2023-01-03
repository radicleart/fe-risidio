<template>
  <section class="bg-white" v-if="content" id="about-section2">
    <div class="d-flex justify-content-center">
      <div class="d-flex align-items-center flex-column my-5" :style="halfDims">
        <div class="my-auto text-center">
          <div
            class="
              mb-auto
              px-5
              d-flex
              align-items-center
              flex-column
              section3Text
            "
          >
            <div class="mb-4 headline">
              {{ content.section3[0].title[0].text }}
            </div>
            <h2 class="mb-4">{{ content.section3[0].subtitle[0].text }}</h2>
            <prismic-rich-text
              class="main-content"
              :field="content.section3[0].content"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable quotes */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
import { SITE_CONSTANTS } from "@/site-constants";
export default {
  name: "AboutSection2",
  props: ["viewportDimensions", "content"],
  data() {
    return {};
  },
  methods: {},
  computed: {
    halfDims() {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT];
      return "min-height: " + height / 2 + "px; width: auto;";
    },
  },
};
</script>

<style scoped>
/*
img {
  width: 100%;
  height: auto;
}
*/
h2 {
  font-size: 36px;
  font-weight: 200;
  letter-spacing: 0px;
  text-transform: capitalize;
  white-space: normal;
}
.headline {
  text-align: center;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0px;
}
.main-content >>> p {
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  letter-spacing: 0px;
  color: #000000;
}
.bg-lighter {
  background-color: "#F5F5F5";
}
.section3Text {
  max-width: 850px;
}
.blurb2 {
  width: 100%;
  text-align: center;
  font-size: 26px;
  font-weight: 200;
  letter-spacing: 0px;
}
#about-section2 {
  padding-top: 100px;
  padding-bottom: 100px;
}
@media only screen and (max-width: 900px) {
  #about-section2 {
    padding-top: 7rem;
  }
}
@media only screen and (max-width: 600px) {
  #about-section2 {
    padding-top: 5rem;
  }
}
@media only screen and (max-width: 768px) {
  h2 {
    width: 75%;
  }
  p {
    width: 75%;
  }
}
@media only screen and (max-width: 425px) {
  #about-section2 {
    padding-top: 3rem;
  }
}
</style>
