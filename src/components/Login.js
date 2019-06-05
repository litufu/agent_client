
import React from 'react'
import { Form, Icon, Input, Button, Checkbox,Spin,Alert,Modal } from 'antd';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import _ from 'lodash'
import '../styles/App.css'
import { AUTH_TOKEN } from '../constants'


const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user{
          name
          username
          account
          accountType
          school{
              name
          }
      }
    }
  }
`

function info() {
    Modal.info({
      title: '请联系客服',
      content: (
        <div>
          <p>客服邮箱：kefu@gewu.org.cn</p>
          <p>客服微信：gewuwangluo</p>
        </div>
      ),
    });
  }


class NormalLoginForm extends React.Component {
    handleSubmit = (e,login) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const username = _.trim(values.username+"")
                const password = _.trim(values.password+"")
                login({ variables: { username, password } })
            }
        });
    };

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
      }

      _confirm = async data => {
        const { token } = data.login
        this._saveUserData(token)
        this.props.history.push('/promote/statistic')
      }  


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Mutation 
            mutation={LOGIN_MUTATION}
            onCompleted={data => this._confirm(data)}
            >
                {
                    (login,{loading,error}) => (
                        <Form onSubmit={(e)=>this.handleSubmit(e,login)} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(<Checkbox>记住我</Checkbox>)}
                                <a className="login-form-forgot" href="#" onClick={info}>
                                    忘记密码
                                </a>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登陆
                                    {loading && <Spin />}
                                </Button>
                                {error && <Alert message={`登陆失败！用户名或密码错误`} type="error" />}
                                <Link to="/promote/register" >
                                    现在注册!
                    </Link>

                            </Form.Item>
                        </Form>
                    )
                }
            </Mutation>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default withRouter(WrappedNormalLoginForm)
