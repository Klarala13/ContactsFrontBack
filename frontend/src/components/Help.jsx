import React from "react";

class Help extends React.Component {
  componentDidMount() {
    document.title = "Help | What to do?";
  }
  render() {
    return (
      <div className="container">
        <dl>
          <dt>Where am I?</dt>
          <dd>You are at the Help page!</dd>
        </dl>
      </div>
    );
  }
}

export default Help;
