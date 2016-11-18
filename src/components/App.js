import React from "react";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div class="logo">TODO App</div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }

};
