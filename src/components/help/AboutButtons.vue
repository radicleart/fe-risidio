<template>
  <div>
    <div class="pb-4" v-for="(ans, index) in answers" :key="index">
      <b-link class="text-nowrap text-center p-3 text-capitalize help-link" @click="showAnswer(ans.slug, index); selectComponent( 'help-link-' + index,$event)">{{ans.slug.split("-").join(" ")}}</b-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutButtons',
  props: ['answers'],
  data () {
    return {
      // colors: ["indigo lighten-3", "light-blue accent-3", "pink lighten-5", "teal lighten-3", "orange accent-2", "yellow lighten-4", "purple lighten-2"]
      colors: ['primary', 'success', 'danger', 'warning', 'info', 'default', 'secondary']
    }
  },
  components: {
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    showAnswer (slug, index) {
      // add class to component so that can be styled
      this.$emit('showAnswer', { index: index, question: slug })
    },
    selectComponent (component, event) {
      if (this.activeLink) {
        this.activeLink.classList.remove('highlight')
      }
      this.activeLink = event.target
      this.activeLink.classList.add('highlight')

      this.selectedComponent = component
    }
  }
}
</script>
<style scoped>
  .help-link.highlight{
    color:#707070;
  }
</style>
