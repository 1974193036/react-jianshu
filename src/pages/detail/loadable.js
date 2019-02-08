import React from 'react';
import Loadable from 'react-loadable';

/** react-loadable：加载异步组件，进入详情页面，才加载详情页面的js等文件 */

const LoadableComponent = Loadable({
  loader: () => import('./index.js'),
  loading() {
  	return <div>正在加载</div> // 加载完毕js文件之前（并不是加载ajax的接口）出现的内容
  }
});

export default () => <LoadableComponent/>
