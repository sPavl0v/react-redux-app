import React from "react";

import NavItem from "./header/NavItem";
import { IndexLink, Link } from "react-router";
import { connect } from 'react-redux';
import * as actions from "../actions/index";

@connect((store) => {
  return {
    user: store.user,
    form: store.form,
  };
})

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  logOut() {
    // this.props.dispatch(actions.toggleForm('signIn'));
    this.props.dispatch(actions.logOutCreator());
  }

  makeResponsive() {
    let x = document.getElementById("navMain");
    if(x.className === "nav-main") {
      x.className += " responsive";
    } else {
      x.className = "nav-main";
    }
  }

  render() {

    const { todos, done, notifications} = this.props;

    return (

      <header>
        <nav>
          <ul class="nav-main" id="navMain">
            <li class="logo">
              <Link to="home">TODO now</Link>
            </li>

            <li>
              <IndexLink to="home">Home</IndexLink>
            </li>

            <li>
              <Link to="app">App</Link>
            </li>

            <li>
              <Link to="about">About</Link>
            </li>

            <li class="to-right">
              <Link to="/" onClick={this.logOut.bind(this)}>Log Out</Link>
            </li>

            <li class="nav-mobile">
              <Link to="" onClick={this.makeResponsive.bind(this)}>☰</Link>
            </li>
          </ul>
        </nav>
      </header>

    );
  }

};
