import React from 'react';
import  ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import Layout from './pages/Layout';
import General from './pages/General';
import Home from './pages/Home';


// apply middleware to our store
let store = applyMiddleware(thunk)(createStore)(reducer);


// const app = document.getElementById('app');
ReactDOM.render(<Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={General}></IndexRoute>
      <Route path="home" component={Home}></Route>
      {/* <Route path="board" component={Board}></Route>
      <Route path="about" component={About}></Route> */}
  </Route>
  </Router>
</Provider>, document.getElementById('app'));
