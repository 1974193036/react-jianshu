import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  login: false // 用户是否登录
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case  constants.CHANGE_LOGIN:
      return state.set('login', action.value)
    case  constants.LOGIN_OUT:
      return state.set('login', action.value)
    default:
      return state
  }
}