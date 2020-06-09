<template>
<div>
<footer class="bg-dark p-2 my-nav footer text-white" style="opacity: 1;">
  <div class="footer_contents">
    <div class="d-flex justify-content-between">
      <div class="copyright">
        <router-link class="text-success" to="/">risidio</router-link>
      </div>
      <div class="d-none d-sm-block">
        &copy; &nbsp; <a class="text-success" href=""> {{ year }}</a>
      </div>
    </div>
  </div>
</footer>
</div>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style>
</style>
