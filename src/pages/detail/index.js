import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {actionCreators} from './store';
import {
  DetailWrapper,
  Header,
  Content
} from './style';

class Detail extends Component {

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
    this.bindEvents()
  }

  bindEvents() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content
          dangerouslySetInnerHTML={{__html: this.props.content}}
        />
      </DetailWrapper>
    )
  }
}


/** react-redux 管理数据 */
const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetail(id))
    }
  }
}

/** 加载异步组件，进入详情页面，才加载详情页面的js等文件，
 * 但是在App.js内导入的是 /pages/detail/loadable，没有直接调用此文件
 * withRouter：让 Detail 有能力获取路由里面等参数和内容，可以获取 this.props.match.params.id 的值 */
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));