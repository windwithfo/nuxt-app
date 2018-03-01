<template lang="pug">
  footer Visit our website for more documentation :
    a(href="https://nuxtjs.org" target="_blank") nuxtjs.org
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from 'nuxt-property-decorator';

  @Component
  export default class MyFooter extends Vue {}
</script>
