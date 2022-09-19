import {login, logout} from '@/api/user';
import {delUserInfo, delUserToken, setUserInfo, setUserToken,toLogout} from "@/utils/user";

export default {
  state: {
    // 用户信息
    userInfo: {},
    // 用户凭证
    accessToken: '',
    // 登录状态
    isLogin: false,
  },
  reducers: {
    // 设置用户信息
    setUserInfo(state, payload) {
      return {
        ...state,
        userInfo: payload
      }
    },
    setAccessToken(state, payload) {
      return {
        ...state,
        userToken: payload
      }
    },
    setIsLogin(state, payload) {
      return {
        ...state,
        isLogin: payload
      }
    }
  },
  effects: () => ({
    // https://rematch.gitbook.io/handbook/api-wen-dang/rematch-core-api
    async login(payload, {user}) {
      // consts {username, password} = payload
      return new Promise((resolve, reject) => {
        login(payload).then(response => {
          console.log(`store user resp:${JSON.stringify(response.data)}`)
          if (response.code === 200) {
            const userInfo = retUserInfo(response.data)
            this.setUserInfo(userInfo)
            this.setAccessToken(userInfo.accessToken)
            this.setIsLogin(true)
            loginSuccess(userInfo)
            resolve(response)
          } else {
            reject(response)
          }
        }).catch(error => {
          console.log(`store userLogin error: ${error}`)
          reject(error)
        })
      })
    },
    async logout(payload, {user}) {
      this.setUserInfo({})
      this.setUserToken('')
      this.setIsLogin(false)
      loginLogout()
      toLogout()
    }
  })
}

const loginSuccess = (params) => {
  setUserInfo(params)
  setUserToken(params.token)
}

const loginLogout = () => {
  delUserInfo()
  delUserToken()
}

const retUserInfo = (params) => {
  return {
    username: params.username,
    avatar: params.avatar,
    email: params.email,
    accessToken: params.accessToken
  }
}
