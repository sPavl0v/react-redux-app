import React from "react";

import { connect } from 'react-redux';
import * as actions from "../../actions";

@connect((store) => {
  return {
    items: store.items
  };
})

export default class NavItem extends React.Component {

  constructor(props) {
    super(props);
  }

  changeItems = (value) => {
    this.props.dispatch( actions.changeItems(value) );
  }

  render() {
    return (
      <div class="nav_item"><a href="#"
         onClick={e => {
           e.preventDefault();
           this.changeItems(this.props.title);
         }}
      >{this.props.title}</a></div>
    );
  }

};
