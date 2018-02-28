/**
 * home store
 * @author dongkunshan(windwithfo@yeah.net)
 */

import fetch from 'isomorphic-fetch';

export const state = () => ({
  count: 0,
  msg: ''
});

export const mutations = {
  add(state) {
    // 变更状态
    state.count++;
  },
  setData(state, payload) {
    Object.assign(state, payload);
  }
};

export const actions = {
  async getData({ commit }, num) {
    console.log(num);
    const ret = await fetch('/mock/test.json')
    .then((response) => response.json());
    commit('setData', { count: ret.count, msg: ret.msg });
  }
};

export const getters = {
  msg: (state) => {
    return state.msg;
  }
};
