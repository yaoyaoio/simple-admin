import React from 'react'
import {connect} from 'react-redux'
import {Button, Form, Input, Row, message} from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import logoPic from '@/assets/logo.svg'
import left from '@/assets/koccc.png'
import css from './index.module.less'

const FormLoginInex = (props) => {
  // 登录逻辑由store完成
  const {login} = props
  const {history} = props

  const [form] = Form.useForm()

  const confirm = () => {
    const formValues = form.validateFields()
    console.log(formValues)
  }

  const onFinish = (values: any) => {
    console.log('Success:', values);
    login(values).then(response => {
      console.log(response)
      message.success("登录成功 正在进入")
      history.push('/')
    }).catch(error => {
      console.log(error)
      message.error("这是一条错误的消息");
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return <div>
    <Form
      name='uplogin'
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={css.loginForm}
    >
      <Form.Item name="username"
                 rules={[{required: true, message: 'Please input your Username!'}]}
      >
        <Input prefix={<UserOutlined className=""/>}
               placeholder="用户名"
               size='large'
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{required: true, message: 'Please input your Password!'}]}
      >
        <Input
          prefix={<LockOutlined className=""/>}
          type="password"
          placeholder="密码"
          size='large'
        />
      </Form.Item>
      <Row/>
      <Form.Item>
        <Button type="primary" size='large' onClick={confirm} htmlType="submit" className={css.loginFormButton}>
          登录
        </Button>
      </Form.Item>
    </Form>
  </div>
}

const Index = (props) => {
  return (
    <div className={css.main}>
      <div className={css.container}>
        <div className={css.header}>
          <div className={css.logo}>
            <img src={logoPic} alt="logo" className={css.img}/>
          </div>
          <span>流媒体服务</span>
        </div>
        <div className={css.content}
             style={{boxShadow: '0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%)'}}>
          <div className={css.loginLeft}>
            <img src={left} alt="background" style={{height: '100%', width: '100%'}}/>
          </div>
          <div className={css.loginRight}>
            <div className={css.loginTitle}>
              <span className={css.loginTitleText}>欢迎登录</span>
            </div>
            <div>
              <span className={css.loginTitleMessage}>欢迎回来，请输入用户名和密码登录</span>
            </div>
            <div>
              <div>
                <FormLoginInex {...props}/>
              </div>
            </div>
          </div>
        </div>
        <div className={css.footer}>
          <div className={css.copyright}>
            <span>Copyright © 2020-2022 XXX. All Rights Reserved. XXX 版权所有</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
  login: dispatch.user.login,
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
