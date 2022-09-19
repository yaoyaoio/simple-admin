import Mock from 'mockjs'
import user from "./user"

Mock.setup({
  timeout: 0 - 300
})

const mocks = [
  ...user
]

for (const i of mocks) {
  Mock.mock(i.url, i.type, i.response)
}

