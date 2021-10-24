import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Components/Header";
import Todo from "./Components/Todo";

class App extends Component {
  KEY = "TODO_LIST";

  constructor() {
    super();
    this.state = { todos: [] };

    this.handleTodoAdd = this.handleTodoAdd.bind(this);
    this.handleTodoRemove = this.handleTodoRemove.bind(this);
    this.handleTodoRemoveAll = this.handleTodoRemoveAll.bind(this);
    this.handleTaskAdd = this.handleTaskAdd.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  // LifeCycle
  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem(this.KEY)) || [];
    this.setState({ todos });
  }

  componentDidUpdate() {
    localStorage.setItem(this.KEY, JSON.stringify(this.state.todos));
  }

  // TODO Methods:
  handleTodoAdd(value) {
    const todos = this.state.todos;

    const todo = { id: uuidv4(), title: value, tasks: [] };
    todos.push(todo);

    this.setState({ todos });
  }

  handleTodoRemove(taskID) {
    const todos = this.state.todos.filter((todo) => todo.id !== taskID);
    this.setState({ todos });
  }

  handleTodoRemoveAll() {
    this.setState({ todos: [] });
  }

  // Task Methods:
  handleTaskAdd(todoID) {
    return (value) => {
      const todos = this.state.todos;

      const todo = todos[todos.findIndex((todo) => todo.id === todoID)];

      const task = { id: uuidv4(), desc: value, completed: false };
      todo.tasks.push(task);

      this.setState({ todos });
    };
  }

  handleComplete(todoID, taskID) {
    const todos = this.state.todos;

    const todo = todos[todos.findIndex((todo) => todo.id === todoID)];

    const task = todo.tasks[todo.tasks.findIndex((task) => task.id === taskID)];
    task.completed = !task.completed;

    this.setState({ todos });
  }

  render() {
    return (
      <>
        <Header totalTodo={this.state.todos.length} handleTodoAdd={this.handleTodoAdd} handleTodoRemoveAll={this.handleTodoRemoveAll} />

        {this.state.todos.length ? (
          <main className="main">
            {this.state.todos.map((todo) => (
              <Todo key={todo.id} data={todo} handleTodoRemove={this.handleTodoRemove} handleTaskAdd={this.handleTaskAdd} handleComplete={this.handleComplete} />
            ))}
          </main>
        ) : (
          <p className="empty">No Todo Lists Yet, Click on Add Todo to Create One.</p>
        )}
      </>
    );
  }
}

export default App;
