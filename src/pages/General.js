import React from "react";

export default class General extends React.Component {

  constructor(props) {
    super(props);
  }

  signIn() {
    localStorage.setItem('auth', true);
    location.hash = "/home";
  }

  render() {

    localStorage.setItem('auth', 'false');

    return (
      <div>

          <section class="general-login">

            <img src="assets/todo-logo-1.png" alt="Logo" width="35%"/>
            <p>Sign In</p>

            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="••••••••••"/>
            <button onClick={this.signIn.bind(this)} >Sign In</button>

            <p class="sign-in-label">Don't have an account? <a href="agar.io">Sign up</a></p>
          </section>

      </div>
    )
  }

}
