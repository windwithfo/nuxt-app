/**
 * home store
 * @author dongkunshan(dongkunshan@xueleyun.com)
 */

import http from 'axios'

export const state = () => ({
  count: 0,
  msg: ''
})

export const mutations = {
  add(state) {
    // 变更状态
    state.count++
  },
  setData(state, payload) {
    Object.assign(state, payload)
  }
}

export const actions = {
  async getData({ commit }) {
    const ret = await http.get('/mock/test.json')
    commit('setData', { count: ret.data.count, msg: ret.data.msg })
  }
}

export const getters = {
  msg: (state) => {
    return state.msg
  }
}
