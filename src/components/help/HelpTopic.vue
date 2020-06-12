<template>
<div class="pl-5 pr-4">
  <div class="row">
    <div class="col-md-10 col-xs-12" v-if="answer">
      <single-topic :answer="answer"/>
    </div>
  </div>
</div>
</template>

<script>
import SingleTopic from './SingleTopic'

export default {
  name: 'HelpTopic',
  props: ['answer'],
  data () {
    return {
    }
  },
  components: {
    SingleTopic
  }
}
</script>
<style scoped>
</style>
