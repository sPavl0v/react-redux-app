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

  addNote(user) {
    let val = document.getElementById('addNote').value;
    this.props.dispatch( actions.addNoteCreator(user, val) );
    document.getElementById('addNote').value = '';
  }

  render() {
    const { user, items } = this.props;
    return (
      <div>
        {/*// TODO: check if fiels id empty*/}
        {(items == 'todos') ? (
          <div class="app_add-todo">
            <input placeholder="Add new todo" type="text" id="addTodo"/>
            <button type="button" value="Add" onClick={this.addTodo.bind(this,user)}>
                Add
            </button>
        </div>):
          (items == 'notifications') ? (

          <div class="app_add-todo">
            <input placeholder="Add new todo" type="text" id="addNote"/>
            {/*<input type="button" value="Add" onClick={this.addNote.bind(this,user)} />*/}
            <button type="button" value="Add" onClick={this.addNote.bind(this,user)}>
              Add
            </button>
          </div>
          ):
          (null)
        }
      </div>


    );
  }

};
