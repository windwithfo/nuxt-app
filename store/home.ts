/* global ReturnType */
/**
 * home store
 * @author dongkunshan(dongkunshan@xueleyun.com)
 */

import http from 'axios'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  count: 0,
  msg: ''
})

export type HomeState = ReturnType<typeof state>

export const mutations: MutationTree<HomeState> = {
  add(state) {
    // 变更状态
    state.count++
  },
  setData(state, payload) {
    Object.assign(state, payload)
  }
}

export const actions: ActionTree<HomeState, HomeState> = {
  async getData({ commit }) {
    const ret = await http.get('/mock/test.json')
    commit('setData', { count: ret.data.count, msg: ret.data.msg })
  }
}

export const getters: GetterTree<HomeState, HomeState> = {
  msg: (state) => {
    return state.msg
  }
}
