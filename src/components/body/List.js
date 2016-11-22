import React from "react";

import Todo from "./Todo";
import { connect } from 'react-redux';
import * as actions from "../../actions/index";

@connect((store) => {
  return {
    items: store.items,
    user: store.user,
  };
})

export default class List extends React.Component {

  constructor(props) {
    super(props);
  }



  // TODO: CHANGE KEYS, REWRITE SWITCH AS A FUNCTION

  render() {

    let todosComponents, logo;
    let { todos, done, notifications } = this.props.user;
    const { items } = this.props;

    switch(items) {
      case 'todos':
        logo = <h3>List of your Todos:</h3>;
        if(todos == null || todos == undefined || todos.length == 0) todosComponents = <div> No items found</div>
        else {
           todosComponents = todos.split(",").map( (todo,i) => {
            return <Todo key={i} title={todo} type="todo" />
          });
        }
        break;

      case 'done':
      logo = <h3>List of done todos:</h3>;
      if(done == null || done == undefined || done.length == 0) todosComponents = <div> No items found</div>
      else {
        todosComponents = done.split(",").map( (done,i) => {
          return <Todo key={i} title={done} type="done" />
        });
      }
      break;

      case 'notifications':
      logo = <h3>List of your notifications:</h3>;
      if(notifications == null || notifications == undefined || notifications.length == 0) todosComponents = <div> No items found</div>
      else {
        todosComponents = notifications.split(",").map( (note,i) => {
          return <Todo key={i} title={note} type="notification" />
        });
      }
      break;
    }


    return (
        <div class="app_list">
          {logo}
          {todosComponents}
        </div>
    );
  }

};
