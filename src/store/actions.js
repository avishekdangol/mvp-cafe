export default {
  setInfo({ commit }, payload) {
    commit('SET_INFO', payload)
  },
  setApiToken({ commit }, payload) {
    commit('SET_API_TOKEN', payload)
  },
  setNavbarTheme({ commit }, payload) {
    commit('SET_NAVBAR_THEME', payload)
  },
  setFooterTheme({ commit }, payload) {
    commit('SET_FOOTER_THEME', payload)
  },
  setTheme({ commit }, payload) {
    commit('SET_THEME', payload)
    localStorage.setItem('theme', payload)
    if (payload === 'dark')
      document.getElementById('app').classList.add('dark-layout')
    else {
      document.getElementById('app').classList.contains('dark-layout')
      ? document.getElementById('app').classList.remove('dark-layout')
      : ''
    }
  },
}