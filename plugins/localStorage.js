/**
 * cache store in localStorage
 * @author dongkunshan(windwithfo@yeah.net)
 */

import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState()(store)
}
