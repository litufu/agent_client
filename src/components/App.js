import React, { Component } from 'react'
import Header from './Header'
import { Switch, Route,Redirect } from 'react-router-dom'
import Login from './Login'
import Entry from './Entry'
import Statistic from './Statistic'
import Instruction from './Instruction'
import { Layout } from 'antd';

// const { Footer } = Layout;
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
        
        {/* <Footer>
          <div>联系地址：河南省安阳市殷都区华祥路与安钢大道交叉口北祥瑞商务大厦招商楼3711</div>
          <div>联系电话：13460825410</div>
          </Footer> */}
      </div>
    )
  }
}

export default App