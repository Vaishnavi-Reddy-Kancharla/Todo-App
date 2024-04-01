import React from "react";

function CompletedItem(props) {
  const completedStyle = {
    
    color: "black",
    opacity: 1,
    
  };

  const { completed, title, tag} = props.completedTaskList;

  return (
    <li className="todo-item">
      <div className="checked-tag">
        <span className={`${tag.toLowerCase()} tag-item`}>{tag}</span>
      </div>
      <div className="todo-heading">
        <h3 style={completed ? completedStyle : null}>{title}</h3>
      </div>
      
    </li>
  );
}

export default CompletedItem;
