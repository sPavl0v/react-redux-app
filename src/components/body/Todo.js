import React from "react";
import { connect } from 'react-redux';

import * as actions from "../../actions/index";

@connect((store) => {
  return {
    user: store.user,
    items: store.items,
  };
})

export default class Todo extends React.Component {

  constructor(props) {
    super(props);
  }

  doSth(user, title) {
    this.props.dispatch(actions.doSthCreator(user, title));
  }

  render() {
    const { user, title, type } = this.props;
    return (
      <div class="todo">
        <span>{title}</span>

        {(type == 'todo') ?
          (<span class="todo_checkbox" onClick={this.doSth.bind(this, user, title)}>&#10004;</span> ) :
          (<span class="todo_checkbox" onClick={this.doSth.bind(this, user, title)}>&#10008;</span>) }
      </div>
    );
  }

};
