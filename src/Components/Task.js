import "./Task.css";

function Task(props) {
  const { id, desc, completed } = props.data;
  return (
    <div className={"task " + (completed ? "complete" : "pending")}>
      <label>
        <span tabIndex="1" className="btn task__btn ">
          {completed ? "Mark Undone" : "Mark Done"}
        </span>
        <input className="task__input" type="checkbox" checked={completed} onChange={() => props.handleComplete(props.taskID, id)} />
      </label>
      <span className="task__desc">{desc}</span>
    </div>
  );
}

export default Task;
