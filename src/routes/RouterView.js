import React from 'react'
import {connect} from "react-redux";
import CacheRoute, {CacheSwitch} from 'react-router-cache-route'
import {Route} from 'react-router-dom'
import Page404 from "@/components/404";
import {RouteMap} from "./routes";

const RouterView = (props) => {
  const {history} = props
  return (
    <CacheSwitch>
      {
        RouteMap().map(({path, component}, index) => {
          return <Route exact path={path} component={component} key={index}/>
        })
      }
      <Route
        path='/*'
        key='redirect'
        render={() => <Page404/>}
        exact
      />
    </CacheSwitch>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(RouterView)

