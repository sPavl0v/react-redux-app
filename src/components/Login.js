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

          <section class="general-login">

            <img src="assets/todo-logo-1.png" alt="Logo" width="35%"/>
            <p>Sign In</p>

            <input type="email" placeholder="Email" id="signin_email" />
            <input type="password" placeholder="••••••••••" id="signin_pass" />
            <button onClick={this.signIn.bind(this)} >Sign In</button>

            <p class="sign-in-label">Don't have an account? <a href="agar.io">Sign up</a></p>
          </section>

      </div>
    )
  }

}
