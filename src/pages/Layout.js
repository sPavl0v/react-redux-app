import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import NotFound from "./NotFound";

import { connect } from 'react-redux';
import * as actions from "../actions/index";


@connect((store) => {
  return {
    items: store.items,
    user: store.user,
  };
})

export default class Layout extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <div class="main-container">
        <Header />
            { (localStorage.getItem('auth') == 'false' && this.props.children.type.name != 'General')
             ? (<NotFound />) : (this.props.children)}
        <Footer />
      </div>
    )
  }

}
