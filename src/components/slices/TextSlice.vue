<template>
  <div class='post-part single'>
    <prismic-rich-text class="textslice" :field="slice.primary.text"/>
  </div>
</template>

<script>
export default {
  props: ['slice'],
  name: 'text-slice'
}
</script>

<style scoped>
    .post-part {
      max-width: 70rem;
      margin: auto;
    }
</style>
