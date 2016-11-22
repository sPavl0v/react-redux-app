import React from "react";

export default class About extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="about_container">

        <div class="about_block">
          <h2>App:</h2>

          Application helps you to manage your time, creating list of todos. Also it saves list of
          thing you've already done, and your notifications.
        </div>

        <div class="about_block">
          <h2>Motivation:</h2>

          Such kind of apps help me to organize my free time, and also it was a good practice of
          writting apps using React library and Redux architecture.
        </div>

        <div class="about_block">
          <h2>Feedback:</h2>

          If you find some issues on this website, or have some advices - connect
          me on my <a class="about_connects" href="https://www.facebook.com/profile.php?id=100011817270760">Facebook</a>,
          <a class="about_connects" href="https://vk.com/id52774590"> Vkontakte</a>,
           or write me directly on my Email: <span class="about_connects">serhiypavlov33@gmail.com</span>.
        </div>
      </div>
    )
  }

}
