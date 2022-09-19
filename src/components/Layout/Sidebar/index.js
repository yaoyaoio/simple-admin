import React from 'react'
import {connect} from 'react-redux'
import {Layout, Menu} from 'antd'
import {SiderMenuRouteMap} from "@/routes/routes";
import {Link} from "react-router-dom";
import iconMap from "@/utils/iconMap";
import Logo from '../Logo'
import {DEFAULT_ROUTEKEY} from "@/consts/url";

const {Sider} = Layout
const {SubMenu} = Menu

/**
 * @description 生成菜单 V1 版本
 * @link  <4.20.0 版本 #
 * @param {Route} item
 * @param {string} parent
 * @param {int} index
 * @constructor
 */
const GenMenu = (item, parent = null, index = null) => {
  const {title, icon, path, name, children, hide} = item
  if (!hide) {
    return
  }
  const pk = name ? name : `${parent}-${index}`
  if (children && children.length > 0) {
    return (
      <SubMenu
        key={pk}
        icon={iconMap[icon]}
        title={<span>{title}</span>}>
        {children.map((child, index) => GenMenu(child, name, index))}
      </SubMenu>
    )
  }
  return (
    <Menu.Item icon={iconMap[icon]} key={pk}>
      <Link to={path || '#'}>
        <span>{title}</span>
      </Link>
    </Menu.Item>
  )
}

/**
 * @description 生成菜单 V2 版本
 * @link  >=4.20.0版本 # https://ant.design/components/menu-cn/#ItemType
 * @param {Route} item
 * @param {string} parent
 * @param {int} index
 * @constructor
 */
const GenItem = (item, parent = null, index = null) => {
  const {title, icon, path, name, children, hide} = item
  if (!hide) {
    return
  }
  const pk = name ? name : `${parent}-${index}`
  if (children && children.length > 0) {
    const cs = children.map((child, index) => GenItem(child, name, index))
    return {
      label: title, key: pk, icon: iconMap[icon], children: cs
    }
  }
  return {
    label: <Link to={path || "#"}><span>{title}</span></Link>, key: pk, icon: iconMap[icon]
  }
}


const GenMenus = (data) => {
  return data.map(item => GenMenu(item))
}

const GenItems = (data) => {
  return data.map(item => GenItem(item))
}

const items = () => {
  return GenItems(SiderMenuRouteMap())
}

const getRootSubmenuKeys = () => {
  return SiderMenuRouteMap().filter(_ => _.name).map(_ => _.name)
}

const Sidebar = (props) => {
  const {
    collapsed,
    theme,
    sidebarTheme,
    history
  } = props

  const [openKeys, setOpenKeys] = React.useState([DEFAULT_ROUTEKEY]);

  const rootSubmenuKeys = getRootSubmenuKeys()

  const defaultSelectedKeys = [DEFAULT_ROUTEKEY]

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  }
  const onClick = ({key}) => {
    if (key === DEFAULT_ROUTEKEY) {
      setOpenKeys([])
    }
  }

  return (
    <Sider theme={sidebarTheme ? sidebarTheme : theme} collapsed={collapsed} width={200} collapsedWidth={64}>
      <Logo/>
      <Menu
        theme={sidebarTheme ? sidebarTheme : theme}  // 主题颜色
        mode='inline' // 菜单类型，现在支持垂直、水平、和内嵌模式三种
        defaultSelectedKeys={defaultSelectedKeys} // 初始选中的菜单项 key 数组
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={onClick}
        items={items()}
      >
      </Menu>
    </Sider>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
