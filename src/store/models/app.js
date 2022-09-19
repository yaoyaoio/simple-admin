/*
基础配置
 */
export default {
  state: {
    theme: '',
    headerTheme: 'dark',
    sidebarTheme: 'dark',
    collapsed: false,
  },
  reducers: {
    handleThemeChange(state, payload) {
      return {
        ...state,
        theme: payload
      }
    },
    handleCollapseChange(state, payload) {
      return {
        ...state,
        collapsed: payload
      }
    }
  },
  effects: () => ({})
}
