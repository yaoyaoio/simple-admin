import React, {useEffect} from 'react';
import {Breadcrumb} from 'antd';
import {HomeOutlined, UserOutlined} from '@ant-design/icons';
import css from './index.module.less'

const Index = (props) => {
  const {history} = props;

  useEffect(() => {
    console.log("bread", history.location)
  }, [history.location])

  return (
    <div className={css.layout}>
      <Breadcrumb>
        <Breadcrumb.Item href="">
          <HomeOutlined/>
          <span>直播管理</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>公开直播</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default Index
