import React from "react";
import TodoList from "./TodoList";
import Todo from "./Todo";
import Form from "./Form";

const todos = [
  {
    name: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    name: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      hide: false,
      notCompletedTodos: [],
    };
  }

  toggleTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  addTodo = (todoText) => {
    const newTodo = {
      name: todoText,
      id: Date.now(),
      completed: false,
    };
    const newTodoList = [...this.state.todos, newTodo];

    this.setState({
      todos: newTodoList,
    });
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <Form addTodo={this.addTodo} />
      </div>
    );
  }
}
