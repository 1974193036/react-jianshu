import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {
  ListInfo,
  ListItem,
  LoadMore
} from '../style';

/** Link：实现单页应用 */

class List extends PureComponent {
  render() {
    return (
      <div>
        {
          this.props.list.map((item, index) => {
            return (
              <Link key={index} to={'/detail/' + item.get('id')}>
                <ListItem>
                  <img className="pic"
                       src={item.get('imgUrl')}
                       alt=""/>
                  <ListInfo>
                    <h3 className="title">{item.get('title')}</h3>
                    <p className="desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => this.props.getMoreList(this.props.articlePage)}>更多文字</LoadMore>
      </div>
    )
  }
}

/** react-redux 管理数据 */
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);