/* global ReturnType */
/**
 * store entry
 * @author dongkunshan(dongkunshan@xueleyun.com)
 */

import { MutationTree } from 'vuex'

export const state = () => ({
  counter: 0
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  increment (state) {
    state.counter++
  }
}
