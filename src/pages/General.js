import React from "react";

export default class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>General page</p>

        <main>
          <section class="general-login">
            <form>
              <input type="email" name="email-auth" /><br/>
              <input type="password" name="password-auth"/><br/>
              <button type="submit">Sign In</button>
            </form>
          </section>
        </main>


      </div>
    )
  }

}
