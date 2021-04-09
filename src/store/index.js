import { createStore } from 'vuex'

export default createStore({
  state: {
    theme: localStorage.getItem('globalTheme') || 'light'
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme
    }
  }
})