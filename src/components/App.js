import React, { Component } from 'react'
import Header from './Header'
import { Switch, Route,Redirect } from 'react-router-dom'
import Login from './Login'
import Entry from './Entry'
import Statistic from './Statistic'
import Instruction from './Instruction'
import { Layout,Button,Modal } from 'antd';
const { Footer } = Layout;

function info() {
  Modal.info({
    title: '联系我们',
    content: (
      <div>
        <p>联系地址：河南省安阳市殷都区华祥路与安钢大道交叉口北祥瑞商务大厦招商楼3711</p>
        <p>联系电话：13460825410</p>
      </div>
    ),
    onOk() {},
  });
}


class App extends Component {

  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv3 background-gray">
          <Switch>
            <Route exact path="/" render={()=><Redirect to="promote"/>}  />  
            <Route exact path="/promote" component={Instruction}  />
            <Route exact path="/promote/login" component={Login} />
            <Route exact path="/promote/register" component={Entry} />
            <Route exact path="/promote/statistic" component={Statistic} />
          </Switch>
        </div>
        <Footer>
          <span>安卓版本：</span>
          <a  style={{fontWeight:"bold"}}  href="https://gewushuidi.oss-cn-hangzhou.aliyuncs.com/sdapp.apk">点击下载</a>
          <Button type="link" onClick={info} style={{marginLeft:50}}>联系我们</Button>
          </Footer>
      </div>
    )
  }
}

export default App