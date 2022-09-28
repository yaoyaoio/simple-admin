import {Card} from 'antd'
import css from './index.module.less'

const ContentHeader = (props) => {
  return (
    <div className={css.header}>
      <div>
        <span>This is page Menu3</span>
      </div>
      <div style={{height: '600vh', padding: 8}}>
       <div>Add content here</div>
      </div>
    </div>
  )
}


const Index = (props) => {
  return (
    <Card>
      <ContentHeader/>
    </Card>
  )
}

export default Index
