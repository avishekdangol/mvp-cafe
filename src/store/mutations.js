export default {
  SET_INFO(state, payload) {
    state.info = payload
  },
  SET_API_TOKEN(state, payload) {
    state.api_token = payload
  },
  SET_NAVBAR_THEME(state, payload) {
    state.navbarTheme = payload
  },
  SET_FOOTER_THEME(state, payload) {
    state.footerTheme = payload
  },
  SET_THEME(state, payload) {
    state.theme = payload
  },
}