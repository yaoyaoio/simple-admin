import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ConfigProvider, message} from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import moment from "moment"
import 'moment/locale/zh-cn'
import store from './store'
import Routes from "./routes"
import 'antd/dist/antd.min.css'

moment.locale('zh-cn')

message.config({maxCount: 1})

const getUserConfirmation = (message, callback) => {
  console.log("getUserConfirmation", message, callback)
  callback(true)
}

export const ROUTE_BASE = ''

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <BrowserRouter
          basename={ROUTE_BASE}
          getUserConfirmation={getUserConfirmation}>
          <Routes/>
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  )
}

export default App
