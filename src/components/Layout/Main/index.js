import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Layout} from 'antd'
import MainContent from '../Content'
import Sidebar from '../Sidebar'
import HeaderLayout from '../Header'
import Bread from '../Bread'


const {Content} = Layout

const Index = (props) => {
  const {history} = props
  const {app, user} = props
  const {handleCollapseChange, logout} = props

  const {collapsed, theme, headerTheme, sidebarTheme} = app
  const {userInfo} = user

  useEffect(() => {
    history.listen(() => {
      let content = document.getElementById('app-content')
      content && content.scrollTo(0, 0)
      console.log("content =>", content)
    })

    const {hash, pathname, search} = history.location
    const url = `${pathname}${hash ? `#${hash}` : ''}${search}`
    console.log("current url =>", url)

  })

  const headerProps = {
    collapsed: collapsed,
    handleCollapseChange: handleCollapseChange,
    theme: theme,
    headerTheme: headerTheme,
    userInfo: userInfo,
    logout: logout
  }

  const siderProps = {
    collapsed: collapsed,
    theme: theme,
    sidebarTheme: sidebarTheme,
    history: history
  }

  const breadProps = {
    history: history
  }

  const contentProps = {...props}

  return (
    <Layout style={{minHeight: '100%'}}>
      <Sidebar
        {...siderProps}
      />
      <Layout style={{position: 'relative', paddingTop: '64px', width: '100%', overflow: 'hidden'}}>
        <HeaderLayout
          {...headerProps}
        />
        <Content>
          <Bread {...breadProps}/>
          <MainContent {...contentProps}/>
        </Content>
      </Layout>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  app: state.app,
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  handleCollapseChange: dispatch.app.handleCollapseChange,
  logout: dispatch.user.logout
})


export default connect(mapStateToProps, mapDispatchToProps)(Index)
