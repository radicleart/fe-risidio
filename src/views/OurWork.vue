<template>
  <div v-if="content" class="bg-white">
    <our-work-section0
      :viewportDimensions="sectionDimensions"
      :content="content"
    />
    <our-work-section1
      :viewportDimensions="sectionDimensions"
      :content="content"
    />
    <our-work-section2 :content="content" />
    <section6 :viewportDimensions="sectionDimensions" />
  </div>
</template>

<script>
/* eslint-disable quotes */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
import { SITE_CONSTANTS } from "@/site-constants";
import OurWorkSection0 from "@/components/ourwork/OurWorkSection0";
import OurWorkSection1 from "@/components/ourwork/OurWorkSection1";
import OurWorkSection2 from "@/components/ourwork/OurWorkSection2";
import Section6 from "@/components/home/Section6";
export default {
  name: "OurWork",
  data() {
    return {
      productId: null,
    };
  },
  components: {
    OurWorkSection0,
    OurWorkSection1,
    OurWorkSection2,
    Section6,
  },
  watch: {},
  methods: {},
  computed: {
    sectionDimensions() {
      const height = this.$store.getters[SITE_CONSTANTS.KEY_SECTION_HEIGHT];
      return "min-height: " + height + "px; width: auto;";
    },
    contentServices() {
      const content = this.$store.getters["contentStore/getPage"]("products");
      if (content) {
        console.log(
          "content: " + content.data.group_set[0].group_item_title[0].text
        );
        return content.data;
      }
      return null;
    },
    content() {
      const content = this.$store.getters["contentStore/getOurWork"];
      return content;
    },
  },
};
</script>
<style scoped>
</style>
