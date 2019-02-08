import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store';
import {
  Addition,
  Button,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SeachWrapper,
  SearchInfo,
  SearchInfoItem,
  SearchInfoSwitch,
  SearchInfoTitle
} from './style';

class Header extends Component {

  getListArea() {
    /** 1.toJS：把list这个 immutable 对象变成 js 普通对象 */
    const newList = this.props.list.toJS()
    const pageList = []

    /** 1.newList.length：初始化的时候会执行这里，此时 newList[i] 为undefined */
    if (newList.length > 0) {
      for (let i = (this.props.page - 1) * 10; i < this.props.page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (this.props.focused || this.props.mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={this.props.handleMouseEnter}
          onMouseLeave={this.props.handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => this.props.handleChangePage(this.props.page, this.props.totalPage, this.spinIcon)}>
              <i className="iconfont spin" ref={(icon) => {
                this.spinIcon = icon
              }}>&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {pageList}
          </div>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo/>
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {
            this.props.login ?
              <NavItem className="right" onClick={this.props.logout}>退出</NavItem>:
              <Link to="/login">
                <NavItem className="right">登录</NavItem>
              </Link>
          }
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SeachWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={400}
              classNames='slide'
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={() => this.props.handleInputFocus(this.props.list)}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'iconfont zoom focused' : 'iconfont zoom'}>&#xe614;</i>
            {this.getListArea()}
          </SeachWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writting">
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

/** react-redux 管理数据 */
const mapStateToProps = (state) => {
  return {
    // focused: state.header.focused
    /** 3.获取 immutable（redux-immutable） 对象中的属性值 */
    // focused: state.get('header').get('focused')
    // 等价于
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      // 获取热门搜索数据（避免无意义的多次请求）
      (list.size === 0) && dispatch(actionCreators.getList())
      // 输入框聚集动画效果
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      // 输入框失焦动画效果
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      // 鼠标移入热门搜索区域
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      // 鼠标离开热门搜索区域
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      // loading效果
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '') // 截取数字部分内容
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

      // 切换下一页热门搜索列表数据
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);