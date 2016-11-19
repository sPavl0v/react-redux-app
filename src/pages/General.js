import React from "react";
import axios from "axios";

import Login from "../components/Login";

export default class General extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

     localStorage.setItem('auth', 'false');

    return (
      <Login />
    )
  }

}
