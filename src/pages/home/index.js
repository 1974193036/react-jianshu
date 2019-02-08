import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

class Home extends PureComponent {

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  // 点击回到顶部
  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  // 绑定监听滚动事件
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  // 销毁监听滚动事件
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4607/2836fb00d1d98798ffe218fc709ec80d30b18c0e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    )
  }
}

/** react-redux 管理数据 */
const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow() {
       // console.log(document.documentElement.scrollTop)
      if(document.documentElement.scrollTop > 400) {
        dispatch(actionCreators.toggleTopShow(true))
      } else {
        dispatch(actionCreators.toggleTopShow(false))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);