import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Dropdown, Layout, Menu, Modal, Avatar} from 'antd'
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import logo from '@/assets/logo.svg'
import css from './index.module.less'

const {Header} = Layout

const Index = (props) => {
  const {
    collapsed,
    userInfo,
    handleCollapseChange,
    logout,
    theme,
    headerTheme,
  } = props
  // modal是否显示
  const [profileIsVisible, setProfileIsVisible] = useState(false)

  const ProfileMenu = (props) => {
    const {info, logout} = props
    return (
      <Menu>
        <Menu.Item key='info'>
          <a onClick={info}>账号信息</a>
        </Menu.Item>
        <Menu.Item key='logout'>
          <a onClick={logout}>退出登录</a>
        </Menu.Item>
      </Menu>
    )
  }


  return (
    <Header className={css.header}>
      <div id='header-left'>
        <div id='header-menu-btn' className={css.headerMenuBtn} onClick={() => {
          handleCollapseChange(!collapsed)
        }}>
          {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
        </div>
      </div>
      <div id='header-right' className={css.headerRight}>
        <div>
          <Dropdown overlay={ProfileMenu({
            info: () => {
              setProfileIsVisible(true)
            },
            logout: () => {
              logout()
            }
          })}>
            <div className={css.profile}>
              <Avatar className={css.avatar} src={userInfo.avatar ? userInfo.avatar : logo} size={40}/>
              {userInfo.username ? userInfo.username : '默认用户'}
            </div>
          </Dropdown>
        </div>
      </div>

      <Modal
        title='账号信息'
        visible={profileIsVisible}
        footer={null}
        onCancel={() => {
          setProfileIsVisible(false)
        }}
      >
        此功能未开发完成，敬请期待。。
      </Modal>
    </Header>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(withRouter(Index)))
