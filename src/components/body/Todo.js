import React from "react";

export default class Todo extends React.Component {

  constructor(props) {
    super(props);
  }

  logId = (id) => {
    console.log(id);
  }

  render() {
    const { title, id, check } = this.props;
    return (
      <div class="todo">
        <div class="todo_title">{title}</div>
        {/* <span>id: {id}</span> */}
        {(check == 'true') ?
          (<div class="todo_checkbox" onClick={this.logId.bind(this, id)} id={id}>&#10004;</div> ) :
          (<div class="todo_checkbox" onClick={this.logId.bind(this, id)} id={id}>&#10008;</div>) }
      </div>
    );
  }

};
