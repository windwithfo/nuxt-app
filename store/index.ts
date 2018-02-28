/**
 * store entry
 * @author dongkunshan(windwithfo@yeah.net)
 */

export const state = () => ({
  counter: 0
});

export const mutations = {
  increment (state) {
    state.counter++
  }
};
