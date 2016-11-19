import React from "react";

import NavItem from "./header/NavItem";
import { IndexLink, Link } from "react-router";
import { connect } from 'react-redux';
import * as actions from "../actions/index";

@connect((store) => {
  return {
    user: store.user,
  };
})

export default class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { todos, done, notifications} = this.props;

    return (

      <header>
        <nav>
          <ul class="nav_main">
            <li class="logo">
              <a>Logo</a>
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

            <li>
              <Link to="/">Log Out</Link>
            </li>
          </ul>
        </nav>
      </header>

    );
  }

};
