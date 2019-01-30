import React from "react";

class NotFound extends React.Component {
  componentDidMount() {
    document.title = "404 | Not Found";
  }
  render() {
    return (
      <div className="container">
        <dl>
          <dt>404 | oooooooooops NOT FOUND</dt>
          <dd>The page you are currently looking for doesn't exist. Please try again</dd>
        </dl>
      </div>
    );
  }
}

export default NotFound;
