import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      todoText: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      todoText: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todoText);
    this.setState({
      todoText: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            id="input"
            placeholder="Type todo"
            type="text"
            value={this.state.todoText}
            onChange={this.handleChange}
          />
          <button>Submit</button>
          <br></br>
          <button>Hide</button>
        </form>
      </div>
    );
  }
}
