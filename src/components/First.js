import React from 'react'
import gql from 'graphql-tag'
import { withApollo } from 'react-apollo'
import {
    Form,
    Input,
    Button,
  } from 'antd';
  

  const HASUSERNAME_QUERY = gql`
  query HasUsernameQuery($username: String!) {
    hasUsername(username: $username) 
  }
`
  
  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll(async  (err, values) => {
        if (!err) {
            const hasName = await this._executeSearch(values.username)
            if(!hasName){
                this.props.handleFirstSubmit(values)
            }else{
                alert('用户名已注册')
                return
            }
        }
      });
      
    };

    _executeSearch = async (username) => {
        const result = await this.props.client.query({
          query: HASUSERNAME_QUERY,
          variables: { username },
        })
        return result.data.hasUsername
      }
  
    handleConfirmBlur = e => {
      const value = e.target.value;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('两次输入的密码不一致!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const form = this.props.form;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  

  
    render() {
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };

      const { getFieldDecorator,  getFieldError, isFieldTouched } = this.props.form;

      const usernameError = isFieldTouched('username') && getFieldError('username');
 
  
      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit} className="first-form">
            <Form.Item 
            validateStatus={usernameError ? 'error' : ''} 
            help={usernameError || ''}
            label="用户名"
            >
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入用户名!' }],
                })(
                    <Input
                    />,
                )}
            </Form.Item>
          <Form.Item label="密码" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: '请输入密码!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password 
            />)}
          </Form.Item>
          <Form.Item label="确认密码" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: '请确认密码!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password 
            onBlur={this.handleConfirmBlur} 
            />)}
          </Form.Item>
          <Form.Item
            label="姓名"
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: '请输入你的姓名!', whitespace: true }],
            })(<Input 
            />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              下一步
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
const First = Form.create({ name: 'register' })(RegistrationForm);
export default withApollo(First)
