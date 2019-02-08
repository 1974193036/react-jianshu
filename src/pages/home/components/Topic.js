import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
  TopWrapper,
  TopicItem
} from '../style';

class Topic extends PureComponent {
  render() {
    return (
      <TopWrapper>
        {
          this.props.list.map(item => {
            return (
              <TopicItem key={item.get('id')}>
                <img
                  className="top-pic"
                  src={item.get('imgUrl')}
                  alt=""/>
                  {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopWrapper>
    )
  }
}


/** react-redux 管理数据 */
const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'topList'])
  }
}

export default connect(mapStateToProps, null)(Topic);