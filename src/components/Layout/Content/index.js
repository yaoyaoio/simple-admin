import React, {useEffect, useState} from 'react'
import {Layout, BackTop} from 'antd'
import RouterView from "@/routes/RouterView"
import css from './index.module.less'

const {Content} = Layout


const MainContent = (props) => {
  return (
    <div id="mainLayout" className={css.sidebar}>
      <Layout style={{overflow: 'auto', height: 'calc(100vh - 50px)', position: 'relative'}}>
        <Content style={{minWidth: 1000, height: '100%', position: 'relative'}}>
          <div className={css.layout}>
            <RouterView history={props.history}/>
          </div>
        </Content>
        <BackTop target={() => document.querySelector('#mainLayout')}>
          <div style={{fontSize:1000}}>UP</div>
        </BackTop>
      </Layout>
    </div>
  )
}

export default MainContent
