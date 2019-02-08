import axios from 'axios';
import * as constants from './constants';

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topList: result.topList,
  articleList: result.articleList,
  recommendList: result.recommendList,
})

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: list,
  nextPage: nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      dispatch(changeHomeData(result))
    }).catch(() => {
      console.log('error')
    })
  }
}

// 加载列表下一页
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data
      dispatch(addHomeList(result, page + 1))
    }).catch(() => {
      console.log('error')
    })
  }
}

// 显示回到顶部按钮
export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show: show
})