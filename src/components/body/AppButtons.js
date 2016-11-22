import React from "react";
import { connect } from 'react-redux';
import * as actions from "../../actions/index";

@connect((store) => {
  return {
    items: store.items,
    user: store.user,
  };
})


export default class AppButtons extends React.Component {

  constructor(props) {
    super(props);
  }

  items(val) {
    this.props.dispatch(actions.changeItems(val));
  }


  render() {
    return (
      <div class="app_buttons">
        <ul>
          <li onClick={this.items.bind(this, 'todos')}>todos</li>
          <li onClick={this.items.bind(this, 'done')}>done</li>
          <li onClick={this.items.bind(this, 'notifications')}>notifications</li>
        </ul>
      </div>
    );
  }

}
