
<template lang="pug">
  #app
    NuxtRouteAnnouncer
    NuxtLoadingIndicator
    //- NuxtWelcome
    el-menu(
      :default-active="activeIndex"
      mode="horizontal"
      class="el-menu-demo"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      @select="menuChange")
      el-menu-item(index=1)
        NuxtLink(to="/") Index page
      el-menu-item(index=2)
        NuxtLink(to="/about") About page
      el-menu-item(index=3)
        NuxtLink(to="/test") Test page
    NuxtLayout
      NuxtPage
  </template>

<script setup lang="ts">
  import { ref } from 'vue'
  const runtimeConfig = useRuntimeConfig()
  const activeIndex = ref('1')

  function menuChange(key: string, keyPath: string[]) {
    console.log(key, keyPath)
  }
  log(runtimeConfig.apiSecret)
  log(runtimeConfig.public.apiBase)
</script>
  
<style lang="scss">
  @import 'element-plus/dist/index.css';
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }
  
  .button--green {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #3b8070;
    color: #3b8070;
    text-decoration: none;
    padding: 10px 30px;
  }
  
  .button--green:hover {
    color: #fff;
    background-color: #3b8070;
  }
  
  .button--grey {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #35495e;
    color: #35495e;
    text-decoration: none;
    padding: 10px 30px;
    margin-left: 15px;
  }
  
  .button--grey:hover {
    color: #fff;
    background-color: #35495e;
  }
</style>
