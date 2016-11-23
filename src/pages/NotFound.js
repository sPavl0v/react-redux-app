import React from "react";

export default class NotFound extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div class="nf_container">
        <h1 class="nf_header">404 Not Found</h1>
        <div class="nf_content">
          <p>Page cannnot be found! Check your connection to the internet and  <span class="signUpBtn">Sign in</span></p>
        </div>
      </div>
    )
  }

}
