<template>
<div class="row">
  <div class="col-12">
    <h4 class="mb-4">{{answer.data.title[0].text}}</h4>
    <div v-for="(item, index) of answer.data.description" :key="index">
      <img class="img-fluid" v-if="item.type === 'image'" :src="item.url" alt="answer image"/>
      <div class="" v-else v-html="item.text"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  components: {
  },
  name: 'SingleTopic',
  props: ['answer'],
  data () {
    return {
    }
  }
}
</script>
