import React from "react";
import axios from "axios";
import { connect } from 'react-redux';


@connect((store) => {
  return {
    user: store.user,
  };
})

export default class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { email, password, username } = this.props.user;
    console.log(this.props.user);
    return (
      <section class="home-profile">

        <div class="profile-info">
          <img src="assets/user-5.jpg" width="50%" height="50%" alt="User image"/>
          <h1>Some Username</h1>
          <p>Someemail@gmail.com</p>
        </div>
        <div class="divide-line"></div>
        <div class="todo-info">
          <img src="assets/list.png" width="30%" height="30%" alt="List of todos"/>
          <img src="assets/stats.png" width="30%" height="30%" alt="List of todos"/>
          <img src="assets/notifications.png" width="30%" height="30%" alt="List of todos"/>
        </div>

      </section>
    )
  }

}

/*  <p> {username} Superpuma </p>
  <p> {email} some@gmal.com </p>*/
