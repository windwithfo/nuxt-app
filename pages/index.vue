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
    p counter: {{ counter }}
    button(@click="addCount") add
    button(@click="init") 10
</template>

<script lang="ts">
  import api  from '~/api/api';
  import util from '~/assets/js/test';

  import {
    Component,
    Vue,
    Emit
  } from 'nuxt-property-decorator';

  import {
    State,
    Action,
    Mutation,
    namespace
  } from 'vuex-class';

  import * as homeStore from '~/store/home';

  const HomeState = namespace(homeStore.name, State);
  const HomeAction = namespace(homeStore.name, Action);
  const HomeMutation = namespace(homeStore.name, Mutation);

  @Component
  export default class extends Vue {
    @HomeState msg: string;
    @HomeState count: Number;
    @HomeAction getData: Function;
    @HomeMutation add: Function;
    @State counter: Number;

    name: string = 'name';
    ajaxCount: Number;
    ajaxMsg: string;

    async asyncData() {
      util.fun1();
      const ret = await api.home.getNum();
      return {
        ajaxCount: ret.count,
        ajaxMsg: ret.msg
      };
    }

    // fetch data
    async fetch({ store, params }) {
      const ret = await api.home.getNum(params);
      store.commit('setStars', ret.count);
    }

    mounted() {
      console.log(this.getMsg);
    }

    // computed
    get getMsg(): string {
      return `msg is ${this.ajaxMsg}`;
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
</script>
