import React from 'react';
import  ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import reducer from './reducers';

import Layout from './pages/Layout';
import General from './pages/General';
import Home from './pages/Home';
import App from './pages/App';
import About from './pages/About';


// apply middleware to our store
let store = applyMiddleware(thunk)(createStore)(reducer);


ReactDOM.render(<Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={General}></IndexRoute>
      <Route path="home" component={Home}></Route>
      <Route path="app" component={App}></Route>
      <Route path="about" component={About}></Route>
    </Route>
  </Router>
</Provider>, document.getElementById('app'));
