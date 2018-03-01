<style lang="scss" scoped>
  .container {
    .title {
      margin-top: 50px;
    }

    .info {
      font-weight: 300;
      color: #9aabb1;
      margin: 0;
      margin-top: 10px;
    }

    .button {
      margin-top: 50px;
    }
  }
</style>

<template lang="pug">
  section.container
    img.logo(src="~/assets/img/logo.png" alt="Nuxt.js Logo")
    h1.title This page is loaded from the {{ name }}
    h2.info(v-if="name === 'client'") Please refresh the page
    nuxt-link.button(to="/") To Home page
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from 'nuxt-property-decorator';

  @Component
  export default class extends Vue {
    name: string;

    asyncData({ req }) {
      return {
        name: req ? 'server' : 'client'
      };
    }

    head() {
      return {
        title: `About Page (${this.name}-side)`
      };
    }
  }
</script>
