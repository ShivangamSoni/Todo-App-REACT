import { Component } from "react";
import "./InputModal.css";

class InputModal extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ value });
  }

  handleSubmit() {
    const value = this.state.value.trim();
    if (value) {
      this.props.handleAction(value);

      this.setState({ value: "" });
      this.props.toggleModal();
    }
  }

  render() {
    return (
      <div className="modalContainer">
        <div className="modal">
          <button className="modal__close" onClick={this.props.toggleModal}>
            &times;
          </button>
          <p className="modal__title">Add {this.props.action[0].toUpperCase() + this.props.action.substring(1)}</p>
          <input className="modal__input" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Add Task" />
          <button className="btn modal__submit" onClick={this.handleSubmit}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default InputModal;
