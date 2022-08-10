<template lang="pug">
section.container
  Head
    Title About Page ({{ name }}-side)
  img.logo(src="~/assets/img/logo.png" alt="Nuxt.js Logo")
  h1.title This page is loaded from the {{ name }}
  h2.info(v-if="name === 'client'") Please refresh the page
  NuxtLink.button(to="/") To Home page
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const name = ref('client')

onMounted(() => {
  name.value = 'server'
})
</script>

<script lang="ts">
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.container {
  width: 300px;
  margin: 0 auto;

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
