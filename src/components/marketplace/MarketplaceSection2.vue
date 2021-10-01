<template>
<section id="section2" class="d-flex justify-content-center align-items-center flex-column">
  <div class="container text-center">
    <h1>{{content.section2[0].title4[0].text}}</h1>
    <prismic-rich-text class="main-content mt-5" :field="content.section2[0].text"/>
  </div>
</section>
</template>

<script>

export default {
  name: 'MarketplaceSection2',
  props: ['content'],
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
h1 {
  margin-bottom: 1rem;
}
h2 {
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
