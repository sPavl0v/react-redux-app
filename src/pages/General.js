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
            <p>Sign In</p>
            <form>
              <input type="email" /><br/>
              <input type="password"/><br/>
              <button type="submit">Sign In</button>
            </form>
          </section>
        </main>


      </div>
    )
  }

}
