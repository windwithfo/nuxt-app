<style lang="scss" scoped>
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
    button(@click="addCount") add
    button(@click="init") 10
</template>

<script lang="ts">
  import util from '~/assets/js/test';
  import fetch from 'isomorphic-fetch';
  import {
    Component,
    Vue,
    Emit
  } from 'nuxt-property-decorator';
  import {
    State,
    Action,
    Mutation,
    namespace,

  } from 'vuex-class';

  const ModuleState = namespace('home', State);
  const ModuleAction = namespace('home', Action);
  const ModuleMutation = namespace('home', Mutation);

  @Component({})
  export default class extends Vue {
    name: string = 'name';
    @ModuleState msg: string;
    @ModuleState count: Number;
    @ModuleAction getData: Function;
    @ModuleMutation add: Function;

    async asyncData({ req, app }) {
      const ret = await fetch('http://localhost:3002/mock/test.json')
      .then((response) => response.json());
      return {
        ajaxCount: ret.count,
        ajaxMsg: ret.msg
      };
    }

    @Emit()
    addCount(): void {
      this.add();
    }

    @Emit()
    init(): void {
      this.getData(11);
    }
  }
  // export default {
  //   name: 'index',
  //   async asyncData({ req, app }) {
  //     const ret = await fetch('http://localhost:3002/mock/test.json')
  //     .then((response) => response.json());
  //     return ret;
  //   },
  //   methods: {
  //     add() {
  //       this.$store.commit('home/add');
  //     },
  //     init() {
  //       this.$store.dispatch('home/getData', 11);
  //     }
  //   }
  // };
</script>
