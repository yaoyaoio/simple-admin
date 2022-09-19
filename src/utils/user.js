export const getUserToken = () => {
  return localStorage.getItem("userAccessToken")
}

export const setUserToken = (params) => {
  return localStorage.setItem("userAccessToken", JSON.stringify(params))
}

export const delUserToken = () => {
  return localStorage.removeItem("userAccessToken")
}

export const isLogin = () => {
  return !!localStorage.getItem('userInfo')
}

export const setUserInfo = (params) => {
  return localStorage.setItem("userInfo", JSON.stringify(params))
}

export const getUserInfo = () => {
  return localStorage.getItem("userInfo")
}

export const delUserInfo = () => {
  return localStorage.removeItem('userInfo')
}

export const toLogin = () => {
  window.location.href = '/login'
}

export const toLogout = () => {
  return toLogin()
}
