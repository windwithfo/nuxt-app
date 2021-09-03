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

<template lang="pug">
  section.container
    img.logo(src="~/assets/img/logo.png" alt="Nuxt.js Logo")
    h1.title Universal Vue.js Application Framework
    nuxt-link.button(to="/about") About page
    p count: {{ count }}
    p msg: {{ msg }}
    p ajaxCount: {{ ajaxCount }}
    p ajaxMsg: {{ ajaxMsg }}
    el-button(@click="addCount") add
    el-button(@click="init") 10
    br
    Logo
</template>

<script lang="ts">
  import {
    Vue,
    State,
    Component,
    namespace,
  } from 'nuxt-property-decorator'

  import http from 'axios'
  import { Button } from 'element-ui'
  import { L } from '~/assets/js/util'
  import Logo from '~/components/NuxtLogo.vue'

  const moduleHome = namespace('home')
  @Component({
    components: {
      Button,
      Logo
    }
  })
  export default class Index extends Vue {
    name = 'index'
    @moduleHome.State msg: any
    @moduleHome.State count: any
    @moduleHome.Action getData: any
    @moduleHome.Mutation add: any
    @State counter: any

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
    }

    created() {
      if (!this.$isServer) {
        L('created')
      }
    }

    mounted() {
    }

    addCount() {
      this.add()
    }

    init() {
      this.getData(11)
    }
  }
</script>
