<template>
<div>
<footer class="footer bg-dark text-light" style="opacity: 0.6;">
  <div class="footer_contents">
    <div class="d-flex justify-content-between">
      <div class="copyright">
        &copy; <router-link class="text-success" to="/">risidio solutions</router-link>
      </div>
      <div class="d-none d-sm-block">
        <i class="far fa-heart"></i>&nbsp; <a class="text-success" href=""> {{ year }}</a>
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
