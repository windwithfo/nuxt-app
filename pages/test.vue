<template lang="pug">
section.container
  Head
    Title test page
    Meta(name="description" content="nuxt3 test")
    Link(rel="icon" type="image/x-icon" href="/favicon.ico")

  h1.title Universal Vue.js Application Framework
  p count: {{ count }}
  p msg: {{ msg }}
  p ajaxCount: {{ ajax.count }}
  p ajaxMsg: {{ ajax.msg }}
  el-button(@click="addCount") add
  el-button(@click="init") 10
  br
</template>

<script lang="ts" setup>
  import { onMounted, ref, reactive } from 'vue'
  
  const msg: any = ref('msg')
  const count: any = ref(0)
  const { data } = await useFetch('/api/system/info')
  const ajax = reactive({
    msg: '',
    count: 0
  })

  ajax.msg = data.value?.msg || ''
  ajax.count = data.value?.count || 0

  function addCount() {
    count.value++
  }

  onMounted(async () => {
    log(useUser().value)
  })

  async function init() {
    const data: any = await $fetch('/api/system/info')
    ajax.msg = data.msg + 'ajax'
    ajax.count = data.count + count.value
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
