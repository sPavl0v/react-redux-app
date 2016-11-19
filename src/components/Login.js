import React from "react";
import axios from "axios";
import * as actions from "../actions";
import { connect } from 'react-redux';

@connect((store) => {
  return {
    user: store.user,
  };
})

export default class About extends React.Component {

  constructor(props) {
    super(props);
  }
  signIn() {
    const email = document.getElementById('signin_email').value;
    const password = document.getElementById('signin_pass').value;

    this.props.dispatch(actions.signInCreator(email, password));
  }


  render() {

    console.log(this.props);

    return (
      <div>
        <p>General page</p>

        <main>
          <section class="general-login">
              <input type="email" id="signin_email" /><br/>
              <input type="password" id="signin_pass" /><br/>
              <button onClick={this.signIn.bind(this)}>Sign In</button>
          </section>
        </main>


      </div>
    )
  }

}
