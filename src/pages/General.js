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
        <p>General page</p>

        <main>
          <section class="general-login">
            <form>
              <input type="email" /><br/>
              <input type="password" /><br/>
              <button onClick={this.signIn.bind(this)} type="submit">Sign In</button>
            </form>
          </section>
        </main>


      </div>
    )
  }

}
