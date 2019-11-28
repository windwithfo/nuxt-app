/**
 * store entry
 * @author dongkunshan(dongkunshan@xueleyun.com)
 */

export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}
