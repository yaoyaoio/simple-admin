import axiosCreater from "axios";
import {BASE_URL} from "@/consts/url";
import {getUserToken} from "@/utils/user";

let axios = axiosCreater.create({
  baseURL: BASE_URL,
  timeout: 3000,
})

axios.defaults.headers.common["Content-Type"] = "application/json";

axios.interceptors.request.use((reqConfig) => {
    const token = getUserToken();
    if (token) {
      reqConfig.headers.commom['Authorization'] = `Bearer ${token}`
    }
    return reqConfig
  },
  (error) => {
    return Promise.reject(error)
  })

axios.interceptors.response.use((response) => {
    console.log('response success:', response)
    return response
  },
  (error) => {
    console.log('response error:', error)
    return Promise.reject(error)
  })


/**
 * @description GET方法
 * @param url 请求URL
 * @param params 请求参数
 * @returns {Promise<T>} 返回Promise对象
 */
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then((response) => {
      resolve(response.data)
    }).catch((error) => {
      reject(error)
    })
  })
}

/**
 * @description POST方法
 * @param url 请求URL
 * @param data 请求参数
 * @returns {Promise<T>} 返回Promise对象
 */
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, {data: data})
      .then((response) => {
        resolve(response.data)
      }).catch((error) => {
      reject(error)
    })
  })
}

/**
 * @description DELETE方法
 * @param url 请求URL
 * @param params 请求参数
 * @returns {Promise<T>} 返回Promise对象
 */
export const del = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.delete(url, {params}).then(
      (response) => {
        resolve(response.data);
      }
    ).catch((error) => {
      reject(error)
    })
  })
}

class RequestFactory {
  constructor(baseURL = BASE_URL) {
    this.axios = axiosCreater.create({
      baseURL: baseURL,
      timeout: 10000,
    });
    this.axios.defaults.headers.common["Content-Type"] = "application/json";

    this.axios.interceptors.request.use((reqConfig) => {
      return reqConfig
    }, (error) => {
      return new Promise.reject(error)
    })

    this.axios.interceptors.response.use((response) => {
      return response
    }, (error) => {
      return new Promise.reject(error)
    })
    return this
  }

  get = (url, params) => {
    return new Promise((resolve, reject) => {
      this.axios.get(url, {params}).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error)
      })
    })
  }
  post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
      this.axios.post(url, data).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error)
      })
    })
  }
  del = (url, params = {}) => {
    return new Promise((resolve, reject) => {
      axios.delete(url, {params}).then(
        (response) => {
          resolve(response.data);
        }
      ).catch((error) => {
        reject(error)
      })
    })
  }
}


const request = new RequestFactory();

export default request
