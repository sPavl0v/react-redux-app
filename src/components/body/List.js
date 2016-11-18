import React from "react";

import Todo from "./Todo";
import { connect } from 'react-redux';
import * as actions from "../../actions/index";

@connect((store) => {
  return {
    todos: store.todos,
    done: store.done,
    notifications: store.notifications,
    items: store.items
  };
})

export default class List extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(actions.getTodosCreator());
  }

  render() {

    const { todos, done, notifications, items } = this.props;
    let todosComponents;


    switch (items) {
      case 'todos':
        todosComponents = todos.map( (todo) => {
          return <Todo key={todo._id} id={todo._id} check="true" title={todo.title} />
        });
        break;
      case 'done':
        todosComponents = done.map( (todo) => {
          return <Todo key={todo.id} id={todo.id} check="false" title={todo.title} />
        });
        break;
      default:
          todosComponents = notifications.map( (note) => {
          return <Todo key={note.id} id={note.id} check="false" title={note.title} />
        });

    }


    return (
      <div class="list">
        <h3>List of your TODOS:</h3>
        {todosComponents}
      </div>
    );
  }

};
