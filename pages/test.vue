<template lang="pug">
section.container
  img.logo(src="~/assets/img/logo.png" alt="Nuxt.js Logo")
  h1.title Universal Vue.js Application Framework
  nuxt-link.button(to="/about") To About page
  p count: {{ count }}
  p msg: {{ msg }}
  p ajaxCount: {{ ajaxCount }}
  p ajaxMsg: {{ ajaxMsg }}
  button(@click="addCount") add
  button(@click="init") 10
  br
  Logo
</template>

<script lang="ts" setup>
  import { L } from '~/assets/js/util'
  import { ref } from 'vue'
  const msg: any = ref('msg')
  const count: any = ref(0)
  const ajaxMsg = ref('')
  const ajaxCount = ref(0)
  const addCount = () => {
    count.value++
  }
  const { data } = await useFetch('/api/test')
  ajaxMsg.value = data.value.msg
  ajaxCount.value = data.value.count
  const init = async () => {
    const data: any = await $fetch('/api/test')
    ajaxMsg.value = data.msg + 'ajax'
    ajaxCount.value = data.count + 1
  }
</script>

<script lang="ts">
  import http from 'axios'
  import Logo from '~/components/NuxtLogo.vue'

  export default {
    name: 'index',
    components: {
      logo: Logo,
    },
    async asyncData() {
      let ret
      try {
        console.log(`${process.env.NUXT_PUBLIC_API_URL}/api/test`)
        ret = await http.get(`${process.env.NUXT_PUBLIC_API_URL}/api/test`)
      } catch (error) {
        console.log(error)
      }
      // const ret = await http.get(`${process.env.NUXT_PUBLIC_API_URL}/api/test`)
      return {
        ajaxCount: ret?.data.count,
        ajaxMsg: ret?.data.msg,
      }
    },
    created() {
      if (this.$isServer) {
        L('created')
      }
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 500px;
    margin: 0 auto;
  }

  .logo {
    margin: 0 70px;
  }

  .title {
    margin: 50px 0;

    p {
      color: #000;
    }
  }
</style>
