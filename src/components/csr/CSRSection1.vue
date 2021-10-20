<template>
<section class="bg-lighter" v-if="section1" id="crs-section-1">
  <div class="d-flex justify-content-center">
    <div class="d-flex align-items-center flex-column my-5">
      <div class="my-auto text-center">
        <div class="mb-auto d-flex align-items-center flex-column">
          <prismic-rich-text class="main-content" :field="section1.content"/>
          <img :src="section1.image.url" :alt="section1.image.alt">
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'CSRSection1',
  props: ['viewportDimensions', 'section1'],
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>
img {
  max-width: 75%;
  max-height: 500px;
  margin: 2rem 0;
}
.main-content >>> h1, .main-content >>> h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}
.main-content >>> p {
  text-align: center;
  font-weight: 300;
  font-size: 15px;
  color: #000000;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
.main-content >>> ul {
  width: 50%;
  margin: 0 auto;
}
.main-content >>> li {
  text-align: left;
  font-weight: 300;
  font-size: 15px;
  color: #000000;
  margin-bottom: 10px;
}
.bg-lighter {
  background-color: '#F5F5F5';
}
@media only screen and (max-width: 768px) {
  .main-content >>> p {
    width: 90%;
  }
  .main-content >>> ul {
    width: 90%;
  }
}
</style>
