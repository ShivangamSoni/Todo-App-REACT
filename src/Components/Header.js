import { Component } from "react";
import "./Header.css";
import InputModal from "./InputModal";

class Header extends Component {
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
    return (
      <header className="header">
        <h1 className="header__title">TODO WEB APP</h1>
        <div className="header__btns">
          {this.state.isShown ? (
            <InputModal toggleModal={this.toggleModal} handleAction={this.props.handleTodoAdd} action="todo" />
          ) : (
            <button className="btn" onClick={this.toggleModal}>
              Add Todo
            </button>
          )}
          {this.props.totalTodo ? (
            <button className="btn" onClick={this.props.handleTodoRemoveAll}>
              Delete All
            </button>
          ) : null}
        </div>
      </header>
    );
  }
}

export default Header;
