import React, { Component } from 'react'
import MediaQuery from 'react-responsive';
import Header from './Header'
import { Switch, Route,Redirect } from 'react-router-dom'
import Login from './Login'
import Entry from './Entry'
import Statistic from './Statistic'
import Instruction from './Instruction'
import MobileIntroduction from './MobileIntroduction'


class App extends Component {

  render() {
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
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
        </div>
        </MediaQuery>
        <MediaQuery query='(max-device-width:1224px)'>
        <div className="center w85">
          <Header />
          <div className="background-gray">
            <Switch>
              <Route exact path="/" render={()=><Redirect to="promote"/>}  />  
              <Route exact path="/promote" component={MobileIntroduction}  />
              <Route exact path="/promote/login" component={Login} />
              <Route exact path="/promote/register" component={Entry} />
              <Route exact path="/promote/statistic" component={Statistic} />
            </Switch>
          </div>
        </div>

      </MediaQuery>
      </div>
      
    )
  }
}

export default App