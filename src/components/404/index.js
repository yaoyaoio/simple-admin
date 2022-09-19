import {Link} from 'react-router-dom'
import {Button} from "antd";
import pic404 from "../../assets/404.svg"
import css from './index.module.less'

const Page404 = () => {
  return (
    <div className={css.exception}>
      <div className={css.img}>
        <img src={pic404} alt={'404'}/>
      </div>
      <div className={css.content}>
        <h1>404</h1>
        <div className={css.desc}>抱歉，你访问的页面不存在或仍在开发中</div>
        <div>
          <Link to="/"><Button>返回首页</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default Page404
