import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: localStorage.getItem('globalTheme') || 'light',
    isSearch: false
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme
    },
    setIsSearch(state) {
      state.isSearch = !state.isSearch
    }
  }
})