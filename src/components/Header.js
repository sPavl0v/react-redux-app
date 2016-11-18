import React from "react";

import NavItem from "./header/NavItem";
import { connect } from 'react-redux';
import * as actions from "../actions/index";

@connect((store) => {
  return {
    todos: store.todos,
    done: store.done,
    notifications: store.notifications,
  };
})

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { todos, done, notifications} = this.props;

    return (
      <div class="header">
        <nav class="nav_bar">
          <ul>
            <NavItem title="todos" data={todos} />
            <NavItem title="done" data={done} />
            <NavItem title="notifications" data={notifications} />
          </ul>
        </nav>
      </div>
    );
  }

};
