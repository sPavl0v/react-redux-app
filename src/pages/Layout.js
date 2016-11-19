import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "./NotFound";

import { connect } from 'react-redux';
import * as actions from "../actions/index";

let auth = false;


@connect((store) => {
  return {
    todos: store.todos,
    done: store.done,
    notifications: store.notifications,
    items: store.items
  };
})

export default class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(actions.getTodosCreator());
  }

  render() {
    return (
      <div class="main-container">
        <Header />
            { (localStorage.getItem('auth') == 'false' && this.props.children.type.name != 'General')
             ? (<NotFound />) : (this.props.children)}
        <Footer />
      </div>
    )
  }

}
