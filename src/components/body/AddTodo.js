import React from "react";
import { connect } from 'react-redux';

import * as actions from "../../actions/index";

@connect((store) => {
  return {
    user: store.user,
  };
})

export default class AddTodo extends React.Component {

  constructor(props) {
    super(props);
  }

  addTodo = () => {
    let val = document.getElementById('addTodo').value;
    this.props.dispatch( actions.addTodoCreator(val) );
    document.getElementById('addTodo').value = '';
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <label>Add new todo:<br />
          <input type="text" id="addTodo" />
        </label>
        <input type="button" value="Add" onClick={this.addTodo} />

      </div>
    );
  }

};
