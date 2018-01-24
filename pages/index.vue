<style scoped>
  .title {
    margin: 50px 0;
  }
</style>

<template lang="pug">
  section.container
    img.logo(src="../assets/img/logo.png" alt="Nuxt.js Logo")
    h1.title Universal Vue.js Application Framework
    nuxt-link.button(to="/about") About page
</template>

<script>
  import util from '../assets/js/test';
  console.log(util.v1);
  export default {
    name: 'index'
  };
</script>
