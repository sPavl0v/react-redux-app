import React from "react";

import AddTodo from "./body/AddTodo";
import List from "./body/List";
import AppButtons from "./body/AppButtons";

export default class Body extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="app_container">
        <AppButtons />
        <AddTodo />
        <List />
      </div>
    );
  }

};
