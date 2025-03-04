<template lang="pug">
section.container
  Head
    Title About Page ({{ name }}-side)

  h1.title This page is loaded from the {{ name }}
  h2.info(v-if="name === 'client'") Please refresh the page
  img.logo(src="~assets/logo.png" alt="Nuxt.js Logo")
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const name = ref('')

onMounted(() => {
  import.meta.server ? name.value = 'server' : name.value = 'client'
})
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
