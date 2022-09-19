import React from 'react'
import {Route, Switch} from 'react-router-dom'
import lazy from "./lazyComponent"
import AuthRoute from "@/routes/auth";

const MainLayout = () => import('@/components/Layout/Main')
const Page404 = () => import('@/components/404')
const Login = () => import('@/pages/Login')

const flag = true

const Routes = () => (
  <Switch>
    {/*main 不能设置exact属性 否则不会向下传递路由*/}
    <Route path='/login' exact key='login' component={lazy(Login)}/>
    <Route path='/404' exact key='404' component={lazy(Page404)}/>
    {
      flag ?
        <AuthRoute path="/" key="main" component={lazy(MainLayout)}/> :
        <Route path='/' key='main' component={lazy(MainLayout)}/>}
  </Switch>
)

export default Routes
