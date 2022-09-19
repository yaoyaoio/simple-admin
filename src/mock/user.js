import {Random} from 'mockjs'

const user = [
  {
    url: 'http://localhost:80/api/v1/user/login',
    type: 'post',
    response: (params) => {
      console.log(params)
      return {
        code: 200,
        data: {
          username: Random.name(),
          avatar: Random.image(),
          email: Random.email(),
          token: Random.guid(),
        }
      }
    }
  },
  {
    url: 'http://localhost:80/api/v1/user/login/ddqrcode',
    type: 'post',
    response: (params) => {
      console.log(params)
      return {
        code: 200,
        data: {
          username: Random.name(),
          avatar: Random.image(),
          email: Random.email(),
          token: Random.guid(),
        }
      }
    }
  }
]

export default user
