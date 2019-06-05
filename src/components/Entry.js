import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { Mutation } from 'react-apollo'
import _ from 'lodash'
import gql from 'graphql-tag'
import {
  Steps,
  Modal,
} from 'antd';
import First from './First'
import Second from './Second'
import Third from './Third';
import Fourth from './Fourth';
import '../styles/App.css';


const SIGNUP_MUTATION = gql`
  mutation SignupMutation($username: String!,
   $password: String!, 
   $name: String!,
   $account:String!,
   $accountType:String!,
   $schoolCode:String!
   ) {
    signup(username: $username, 
    password: $password, 
    name: $name,
    account:$account,
    accountType:$accountType,
    schoolCode:$schoolCode
    ) {
      token
    }
  }
`



class Entry extends Component {
  state = {
    step: 0,
    username: '',
    password: '',
    name: '',
    location:"",
    schoolCode:"",
    schoolName:"",
    accountType:"",
    account:"",
    visible: false
  }

  info=(signup)=>{
    Modal.info({
      title: '提示',
      content: (
        <div>
          <p>协议签署成功，合作愉快,请登录！。</p>
        </div>
      ),
      onOk:()=> {
        const username = _.trim(this.state.username+"")
        const password = _.trim(this.state.password+"")
        const name = _.trim(this.state.name+"")
        const account = _.trim(this.state.account+"")
        const accountType = _.trim(this.state.accountType+"")
        const schoolCode = _.trim(this.state.schoolCode+"")
        signup({ variables: { username,password,name,account,accountType,schoolCode } });
        this.setState({
        visible: false,
      })},
    });
  }


  renderFirstStep = () => {
    const { username, password, name } = this.state
    return (
      <div>
        <div className="flex flex-column">
          <input
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="请输入你的姓名"
          />
          <input
            value={username}
            onChange={e => this.setState({ username: e.target.value })}
            type="text"
            placeholder="请输入用户名"
          />
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="请输入密码"
          />
        </div>
        <div className="flex mt3">
          <div className="pointer mr2 button" onClick={() => this.setState({ step: 2 })}>
            下一步
              </div>
        </div>
      </div>
    )
  }

  renderStep = () => {
    const { Step } = Steps;
    const { step } = this.state
    return (
      <Steps current={step}>
        <Step title="第一步" description="输入账号、姓名和密码" />
        <Step title="第二步" description="选择推广学校" />
        <Step title="第三步" description="输入收款账户" />
        <Step title="第四步" description="签订协议，提交完成" />
      </Steps>
    )
  }

  render() {
    const { step,name,schoolName,accountType,account } = this.state
    const { history } = this.props;

    return (
      <div>
        {this.renderStep()}
        {step === 0 &&
          <First
            handleFirstSubmit={(values) => { 
              this.setState({ 
                step: 1,
                username:values.username,
                password:values.password,
                name:values.nickname
               }) 
            }}
          />
        }
        {
          step === 1 && 
          <Second 
          handleSecondSubmit={(values) => { 
            this.setState({ 
              step: 2,
              location:values.residence[2],
              schoolCode:values.schoolCode,
              schoolName:values.schoolName
             }) 
          }}
          />
        }
         {
          step === 2 && 
          <Third 
          handleThirdSubmit={(values) => { 
            this.setState({ 
              step: 3,
              accountType:values.accountType,
              account:values.account,
             }) 
          }}
          />
        }
        {
          step === 3 && 
          <Mutation 
          mutation={SIGNUP_MUTATION}
          onCompleted={()=>history.push('/promote/login')}
           >
            {(signup) => (
              <Fourth 
              name={name}
              schoolName={schoolName}
              accountType={accountType}
              account={account}
              handleFourthSubmit={() => {
                this.info(signup) 
              }}
              />
      )}
          </Mutation>
        }
      </div>)

  }

  login = async data => {
    const { token } = data.login
    this._saveUserData(token)
    this.props.history.push(`/promote`)
  }

  _confirm = async data => {
    const { token } = this.state.login ? data.login : data.signup
    this._saveUserData(token)
    this.props.history.push(`/promote`)
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Entry