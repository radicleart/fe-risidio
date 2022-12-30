<template>
  <section id="homesection4" class="bg-white">
    <div
      class="
        d-flex
        align-items-center
        justify-content-center
        flex-column
        my-auto
        py-5
        text-center
      "
      :style="viewportDimensions"
    >
      <div class="mb-5 mt-5 pb-4">
        <h2 class="text-black">{{ content.section3_title[0].text }}</h2>
      </div>
      <div class="row-container">
        <section
          class="content-container"
          v-for="(item, index) in group"
          :key="index"
        >
          <div class="image-container">
            <img
              class="p-3"
              :src="content.section3_content[index].icon.url"
              alt=""
            />
          </div>
          <div class="text-container">
            <prismic-rich-text :field="item.content" />
          </div>
        </section>
      </div>
      <router-link to="/contact"
        ><button class="touch-button">
          Interested? Get In Touch
        </button></router-link
      >
    </div>
  </section>
</template>

<script>
/* eslint-disable quotes */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable comma-dangle */

export default {
  name: "Section4",
  components: {},
  props: ["viewportDimensions"],
  data() {
    return {};
  },
  methods: {},
  computed: {
    group() {
      const content = this.$store.getters["contentStore/getHomepage"];
      return content.section3_content;
    },
    content() {
      const content = this.$store.getters["contentStore/getHomepage"];
      return content;
    },
  },
};
</script>

<style scoped>
.row-container {
  max-width: 1130px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
}
.text-container {
  max-width: 300px;
  width: 100%;
}
.text-container >>> p {
  font: normal normal 300 12px/18px Montserrat;
  text-align: center;
}
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content-container:not(:last-child) {
  margin-right: 30px;
}
.touch-button {
  width: 224px;
  height: 43px;
  background: rgba(95, 189, 193, 0.15);
  border-radius: 22px;
  margin-top: 50px;
  font-size: 11px;
  font-weight: 700;
}
.touch-button:hover {
  background: #5fbdc1;
  color: aliceblue;
}
.touch-button a {
  color: rgba(95, 189, 193, 1);
  font-weight: 700;
  font: normal normal bold 11px/14px Montserrat;
}
.mobile-col__img {
  display: flex;
  justify-content: flex-end;
}

.mobile-col__text {
  align-items: flex-start;
}

@media only screen and (max-width: 1023px) {
  .content-container:not(:last-child) {
    margin-right: 0;
    margin-bottom: 15px;
  }
  .row-container {
    flex-direction: column;
    justify-content: space-between;
    padding: 0 15px;
  }
}
@media only screen and (max-width: 991px) {
  .content-wrap {
    flex-flow: column;
  }
  .mobile-col {
    display: flex;
    justify-content: center;
  }
  .mobile-col__text {
    margin-top: 1rem;
    align-items: center;
    width: 65%;
  }
  p {
    text-align: center;
  }
}
</style>
