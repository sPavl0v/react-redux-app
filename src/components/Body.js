import React from "react";

import AddTodo from "./body/AddTodo";
import List from "./body/List";

export default class Body extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="body">
        <AddTodo />
        {/* <List /> */}
        list
      </div>
    );
  }

};
