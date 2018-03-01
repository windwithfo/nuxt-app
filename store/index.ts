/**
 * store entry
 * @author dongkunshan(windwithfo@yeah.net)
 */

export const state = () => ({
  counter: 11
});

export const mutations = {
  increment(state) {
    state.counter++;
  }
};
