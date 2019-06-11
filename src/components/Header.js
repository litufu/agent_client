import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <div className="fw7 mr1">格物水滴业务推广管理系统</div>
        </div>
        <div className="flex flex-fixed">
          {authToken ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                this.props.history.push(`/promote`)
              }}
            >
              退出
            </div>
          ) : (
              <Link to="/promote/login" className="ml1 no-underline black">
                登陆
            </Link>
            )}
            <div className="ml1 no-underline black">|</div>
            <div><a href="https://www.anyanggewu.com/" className="ml1 no-underline black">返回主页</a></div>
            {/* <div className="ml1 no-underline black">|</div> */}
            {/* <Button type="link" onClick={info} className="ml1 no-underline black">联系我们</Button> */}
            {/* <div><a  href="#"  className="ml1 no-underline black" onClick={info}>联系我们</a></div> */}
        </div>
      </div>
    )
  }
}

export default withRouter(Header)