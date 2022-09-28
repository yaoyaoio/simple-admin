import React, {useEffect, useState} from 'react';
import {Breadcrumb} from 'antd';
import {HomeOutlined, UserOutlined} from '@ant-design/icons';
import css from './index.module.less'

const Index = (props) => {
  const {history} = props;
  const arr = [{
    path:'/',
    title: 'Home'
  },{
    path: '/broadcast',
    title: '直播'
  },{
    path: '/menu3',
    title: 'Menu3'
  },{
    path: '/menu4',
    title: 'Menu4'
  },{
    path: '/menu5',
    title: 'Menu5'
  }]
  const [currentBread, setCurrentBread] = useState(null);

  useEffect(() => {
    //获取当前url路径
    let currentPathname = history.location.pathname;
    
    //获取当前面包屑对象，并取出title
    const path = arr.find(item => item.path === currentPathname)
    setCurrentBread(path)
  }, [history.location])

  return (
    <div className={css.layout}>
      <Breadcrumb>

        {/*一级目录面包屑*/}
        <Breadcrumb.Item href="">
          <HomeOutlined/>
          <span>直播管理</span>
        </Breadcrumb.Item>

        {/*二级目录面包屑*/}
        {
          currentBread
          ? <Breadcrumb.Item>
              { currentBread.title }
            </Breadcrumb.Item>
          : <Breadcrumb.Item>{'Home'}</Breadcrumb.Item>
        }
      </Breadcrumb>
    </div>
  )
}

export default Index
