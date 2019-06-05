import React from 'react'
import options from './Code'
import {
    Form,
    Cascader,
    Radio,
    Button,
    Spin,
    Alert
  } from 'antd';
  import gql from 'graphql-tag'
  import {Query} from 'react-apollo'
  import '../styles/App.css'
  

  const SCHOOLS_QUERY = gql`
  query SchoolsQuery($locationCode: String!) {
    schools(locationCode: $locationCode) {
        code
        name
        hasAgent
    }
  }
`

  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
      location:["","",""],
      schoolCode:"",
      schoolName:"",
    };
  
    handleSubmit = e => {
      e.preventDefault();
      if(!this.state.schoolCode){
          return
      }
      const values = {schoolCode:this.state.schoolCode,schoolName:this.state.schoolName,residence:this.state.location}
      this.props.handleSecondSubmit(values)
    };

    onChange = (value)=>{
        this.setState({location:value})
    }

    onChoice = (e,data) =>{
        this.setState({
            schoolCode:e.target.value,
            schoolName:data.schools.filter(school=>school.code===e.target.value)[0].name
        })
    }
  
   
    render() {
      const { getFieldDecorator } = this.props.form;
  
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
 
  
      return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit} className="second-form">
          <Form.Item label="所在地区">
            {getFieldDecorator('residence', {
              rules: [
                { type: 'array', required: true, message: '请选择地区!' },
              ],
            })(<Cascader
                size="default"
                onChange={this.onChange}    
                options={options}
                placeholder="选择地区"
                fieldNames={{ label: 'name', value: 'code', children: 'children' }}
            />)}
          </Form.Item>
          <Form.Item label="学校">
            <Query query={SCHOOLS_QUERY} variables={{ locationCode:this.state.location[2] }}>
            {({ loading, error, data }) => {
            if (loading) return ( <Spin />)
            if (error) return (<Alert
                                message="错误"
                                description="加载失败."
                                type="error"
                                showIcon
                            />)
        
            return (
                <Radio.Group onChange={(e)=>this.onChoice(e,data)} value={this.state.schoolCode}>
                {data.schools.filter(school=>school.hasAgent===false).map(school => (
                    <Radio style={radioStyle} value={school.code} key={school.code}>
                        {school.name}
                    </Radio>
                ))}
                </Radio.Group>
            );
            }}
            </Query>
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
  
  const Second = Form.create({ name: 'register' })(RegistrationForm);
  export default Second


