import { createStore } from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const store = createStore({
  state() {
    return {
      info: {},
      api_token: null,
      navbarTheme: {},
      footerTheme: {},
      theme: '',
    }
  },
  getters,
  mutations,
  actions,
})

export default store