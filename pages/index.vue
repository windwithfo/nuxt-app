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
    a-button(@click="addCount") add
    a-button(@click="init") 10
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
  import { Button } from 'ant-design-vue'
  import { L } from '~/assets/js/util'
  import Logo from '~/components/Logo.vue'

  const moduleHome = namespace('home')
  @Component({
    components: {
      Button,
      Logo
    }
  })
  export default class Index extends Vue {
    name = 'index'
    @moduleHome.State msg
    @moduleHome.State count
    @moduleHome.Action getData
    @moduleHome.Mutation add
    @State counter

    async asyncData() {
      const ret = await http.get('http://localhost:3000/mock/test.json')
      return {
        ajaxCount: ret.data.count,
        ajaxMsg: ret.data.msg,
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
