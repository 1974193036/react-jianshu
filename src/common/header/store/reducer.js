import * as constants from './constants'
import {fromJS} from 'immutable'

/** 1.fromJS：把state对象变成 immutable 对象，使得state不可变 */
const defaultState = fromJS({
  focused: false,
  list: [], /** [] 是一个 immutable 类型的数组，赋值的时候的 action.data 必须也是一个 immutable 类型的数组 */
  page: 1,
  totalPage: 1, // 总页码
  mouseIn: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      /** 2.修改 immutable 对象中的属性值
       *  immutable对象的 set 方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
       * */
      return state.set('focused', true)
    // {focused: true}
    case constants.SEARCH_BLUR:
      /** 2.修改 immutable 对象中的属性值 */
      return state.set('focused', false)
    // {focused: false}
    case constants.CHANGE_LIST:
      // return state.set('list', action.data).set('totalPage', action.totalPage)
      /** merge：修改多个对象中的属性值（多个set的时候） */
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}