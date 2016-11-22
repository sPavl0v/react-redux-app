import React from "react";
import { connect } from 'react-redux';

import * as actions from "../../actions/index";

@connect((store) => {
  return {
    user: store.user,
    items: store.items,
  };
})

export default class AddTodo extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if(localStorage.getItem('auth') == 'true' && this.props.user.email == undefined) {
      this.props.dispatch(actions.reSignIn(localStorage.getItem('email')));
    }
  }

  addTodo(user) {
    let val = document.getElementById('addTodo').value;
    this.props.dispatch( actions.addTodoCreator(user, val) );
    document.getElementById('addTodo').value = '';
  }

  render() {
    const user = this.props.user;
    return (
      <div class="app_add-todo">
        <input placeholder="Add new todo" type="text" id="addTodo" />
        <input type="button" value="Add" onClick={this.addTodo.bind(this,user)} />
      </div>
    );
  }

};
