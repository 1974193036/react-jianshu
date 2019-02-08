import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/index';
import Header from './common/header';
import Home from './pages/home';
import Login from './pages/login';
import Write from './pages/write';

/** 加载异步组件，进入详情页面，才加载详情页面的js等文件 */
import Detail from './pages/detail/loadable';


/** Header内要用到路由的 Link 组件，Header必须放在 BrowserRouter 内 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
