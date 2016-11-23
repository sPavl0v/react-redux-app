import React from "react";
import axios from "axios";
import * as actions from "../actions";
import { connect } from 'react-redux';

@connect((store) => {
  return {
    form: store.form,
    user: store.user,
  };
})

export default class About extends React.Component {

  constructor(props) {
    super(props);
  }


  changeForm() {
    this.props.dispatch(actions.toggleForm('signUp'));
  }


  signIn() {
    const email = document.getElementById('signin_email').value;
    const password = document.getElementById('signin_pass').value;

    this.props.dispatch(actions.signInCreator(email, password));
  }

  createUser() {
    const email = document.getElementById('signup_email').value;
    const password = document.getElementById('signup_pass').value;
    const username = document.getElementById('signup_name').value;

    this.props.dispatch(actions.createUser(email, password, username));

    document.getElementById('signup_email').value = "";
    document.getElementById('signup_pass').value = "";
    document.getElementById('signup_name').value = "";
  }


  render() {

    const form = this.props.form;

    return (

      <div>

            {form == 'signIn' ?

              (
              <section class="general-login">

                <img src="assets/todo-logo-1.png" alt="Logo" width="35%"/>
                <p>Sign In</p>

                <input type="email" placeholder="Email" id="signin_email" />
                <input type="password" placeholder="••••••••••" id="signin_pass" />
                <button onClick={this.signIn.bind(this)} >Sign In</button>

                <p class="sign-in-label">Don't have an account? <span class="signUpBtn" onClick={this.changeForm.bind(this)}>Sign up</span></p>
              </section>)

              :

              (
              <section class="general-login">

                <img src="assets/todo-logo-1.png" alt="Logo" width="35%"/>
                <p>Sign Up</p>

                <input type="email" placeholder="Email" id="signup_email" />
                <input type="text" placeholder="Username" id="signup_name" />
                <input type="password" placeholder="••••••••••" id="signup_pass" />
                <button onClick={this.createUser.bind(this)} >Sign Up</button>

                <p class="sign-in-label">Already have an account? <span class="signUpBtn" onClick={this.changeForm.bind(this)}>Sign in</span></p>
              </section>)

            }



      </div>
    )
  }

}
