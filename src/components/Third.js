import React from 'react'
import {
    Form,
    Input,
    Radio,
    Button,
  } from 'antd';
  import '../styles/App.css'
  
  
  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
            this.props.handleThirdSubmit(values)
          console.log('Received values of form: ', values);
        }
      });
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

      const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };

      const { getFieldDecorator,  getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const accountError = isFieldTouched('username') && getFieldError('username');
 
  
      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit} className="second-form">
            <Form.Item label="账户类型">
            {getFieldDecorator('accountType', {
              rules: [
                { type: 'string', required: true, message: '请选择账户类型!' },
              ],
            })(<Radio.Group>
                <Radio style={radioStyle} value={"1"}>
                  支付宝账户
                </Radio>
                <Radio style={radioStyle} value={"2"}>
                  微信账户
                </Radio>
              </Radio.Group>)}
          </Form.Item>
          <Form.Item
          validateStatus={accountError ? 'error' : ''} 
          help={accountError || ''}
          label="业务提成收款账户"
          >
          {getFieldDecorator('account', {
            rules: [{ required: true, message: '请输入你的账户!' }],
          })(
            <Input />
            ,
          )}
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
  
  const Third = Form.create({ name: 'register' })(RegistrationForm);
  export default Third


