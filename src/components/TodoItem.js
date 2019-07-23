import React, { Component } from "react";

class componentName extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

export default componentName;
