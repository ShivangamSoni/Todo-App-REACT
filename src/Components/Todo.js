import { Component } from "react";
import "./Todo.css";
import Task from "./Task";
import InputModal from "./InputModal";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { isShown: false };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    const isShown = !this.state.isShown;
    this.setState({ isShown });
  }

  render() {
    const { id, title, tasks } = this.props.data;
    return (
      <div className="todo">
        <h2 className="todo__title">{title}</h2>

        <div className="todo__tasks">
          {tasks.map((task) => (
            <Task data={task} key={task.id} handleComplete={this.props.handleComplete} taskID={id} />
          ))}
        </div>

        <div className="todo__btns">
          {this.state.isShown ? (
            <InputModal toggleModal={this.toggleModal} handleAction={this.props.handleTaskAdd(id)} action="task" />
          ) : (
            <button className="btn" onClick={this.toggleModal}>
              Add Task
            </button>
          )}

          <button className="btn" onClick={() => this.props.handleTodoRemove(id)}>
            Delete Todo
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
