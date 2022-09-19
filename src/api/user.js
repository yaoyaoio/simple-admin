import request from "@/utils/request"

/**
 * 用户登录
 * @param params = {"username":"","password":""}
 * @return {Promise | Promise<>}
 */
export const login = (params) => {
  return request.post("/api/v1/user/login", params)
}

/**
 * 用户信息
 * @param params
 * @returns {Promise | Promise<>}
 */
export const userInfo = (params) => {
  return request.get("/api/v1/user/userInfo", params)
}
/**
 * 退出登录
 * @param params
 * @returns {Promise | Promise<>}
 */
export const logout = (params) => {
  return request.post("/api/v1/user/logout", params)
}
