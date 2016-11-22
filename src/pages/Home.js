import React from "react";

import Greeting from "../components/home/Greeting";
export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <Greeting/>
      </div>
    )
  }

}
