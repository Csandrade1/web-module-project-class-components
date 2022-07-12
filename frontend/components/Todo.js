import React from "react";

export default class Todo extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div onClick={() => this.props.toggleTodo(this.props.todo.id)}>
        <p>
          {this.props.todo.name}
          {`${this.props.todo.completed ? " ✔" : ""}`}
        </p>
      </div>
    );
  }
}
