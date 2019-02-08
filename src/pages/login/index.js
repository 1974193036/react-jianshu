import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style';


class Login extends PureComponent {
  render() {
    if (!this.props.loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={(input) => {this.account = input}}/>
            <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'/>
    }
  }
}


/** react-redux 管理数据 */
const mapStateToProps = (state) => {
  return {
    loginState: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login(account, password) {
      // 传入账号密码
      dispatch(actionCreators.login(account.value, password.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);