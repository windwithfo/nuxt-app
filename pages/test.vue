<template lang="pug">
Head
  Title test page
  Meta(name="description" content="nuxt3 test")
  Link(rel="icon" type="image/x-icon" href="/favicon.ico")

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
  LazyNuxtLogo
</template>

<script lang="ts" setup>
import http from 'axios'
import { ref } from 'vue'
import { L } from '~/assets/js/util'

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
export default {
  name: 'Index',
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

  .logo {
    margin: 0 70px;
  }

  .title {
    margin: 50px 0;
  
    p {
      color: #000;
    }
  }
}
</style>
