import React from "react";

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('home mounted');
  }

  render() {
    return (
      <div>home</div>
    )
  }

}
