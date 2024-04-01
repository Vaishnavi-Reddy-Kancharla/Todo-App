import React from "react";

function TodoItem(props) {
  const completedStyle = {
    
    color: "black",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { completed, id, title, tag} = props.todo;

  //console.log("todo", props.todo);
  return (
    <li className="todo-item">
      <div className="checked-tag">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <span
          className={`${tag.toLowerCase()} tag-item`}
          style={completed ? completedStyle : null}
        >
          {tag}
        </span>
      </div>
      <div className="todo-heading">
        <h3 style={completed ? completedStyle : null}>{title}</h3>
      </div>
     
        
        <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
     
    </li>
  );
}

export default TodoItem;
