import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";


export default class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="main-container">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }

}
