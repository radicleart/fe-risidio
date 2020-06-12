<template>
<b-modal scrollable id="modal-3" :title="title">
  <div class="row">
    <div class="col-12 my-1" v-html="content"></div>
  </div>
  <waiting-view class="waiting-view" />
  <template v-slot:modal-footer>
  </template>
</b-modal>
</template>

<script>

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'ConfirmationModal',
  components: {
  },
  props: ['modal', 'title', 'content', 'modalLoginWarning'],
  data () {
    return {
      modalLoginTitle: 'Please Log In',
      modalLoginContent: '<p>You\'ll need to login to use this feature.</p>'
    }
  },
  mounted () {
    if (this.modalLoginWarning) {
      this.title = this.modalLoginTitle
      this.content = this.modalLoginContent
    }
  },
  methods: {
    closeMe: function () {
      this.$emit('closeModal')
    }
  }
}
</script>
<style>

</style>
<style scoped>
</style>
