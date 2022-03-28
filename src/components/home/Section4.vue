<template>
    <section class="bg-white">
      <div class="d-flex align-items-center flex-column" :style="viewportDimensions">
        <div class="my-auto py-5 text-center">
          <div class="mb-5 mt-5 pb-4"><h1 class="text-black">{{content.section3_title[0].text}}</h1></div>
          <div class="px-5 row text-center">
            <div class="col-lg-4" v-for="(item, index) in group" :key="index">
              <div class="container">
                <div class="image-container">
                  <img class="p-3" :src="content.section3_content[index].icon.url" alt=""/>
                </div>
                <div class="text-container">
                  <prismic-rich-text :field="item.content"/>
                </div>
              </div>
            </div>
          </div>
          <button class="touch-button"><span>Interested ? Get In Touch</span></button>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'Section3',
  components: {
  },
  props: ['viewportDimensions'],
  data () {
    return {
    }
  },
  methods: {
  },
  
  computed: {
    group () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content.section3_content
    },
    content () {
      const content = this.$store.getters['contentStore/getHomepage']
      return content
    }
  }
}
</script>

<style scoped>
.main-content >>> h1 {
  text-align: left;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.touch-button {
  width: 224px;
  height: 43px;
  background: rgba(95, 189, 193, 0.15);
  border-radius: 22px;
  margin-top: 50px;
}
.touch-button span{
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
  .main-content >>> h1 {
    text-align: center;
  }
  .main-content {
    text-align: center;
  }
  p { text-align: center; }
}
</style>
