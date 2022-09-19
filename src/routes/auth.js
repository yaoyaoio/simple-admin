import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {isLogin} from "@/utils/user";

/**
 * @description 认证路由
 * @param user
 * @param component
 * @param res
 * @returns {JSX.Element}
 * @constructor
 */
const AuthRoute = ({user, component, ...res}) => {
  const {location} = {...res}
  if (isLogin()) {
    return <Route component={component} {...res}/>
  }
  return <Redirect to={{pathname: '/login', state: {location}}}/>
}


const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute)

