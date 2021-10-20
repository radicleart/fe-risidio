<template>
<section id="section2" class="d-flex justify-content-center align-items-center flex-column">
  <div class="container text-center">
    <prismic-rich-text class="main-content" :field="section2.content"/>
  </div>
</section>
</template>

<script>

export default {
  name: 'MarketplaceSection2',
  props: ['section2'],
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
#section2 {
  padding: 100px 0;
}
.main-content >>> h1 {
  margin-bottom: 3rem;
}
.main-content >>> h2 {
  margin-bottom: 2rem;
}
.main-content {
  max-width: 750px;
  margin: 0 auto;
}
.main-content >>> h6 {
  text-align: left;
}
.main-content >>> p:last-child {
  margin-bottom: 0;
}
</style>
