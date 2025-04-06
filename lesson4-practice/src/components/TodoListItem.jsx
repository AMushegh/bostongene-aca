import React from "react";

const TodoListItem = ({
  id,
  title,
  completed,
  onDeleteButtonClick,
  onCheckboxClick,
}) => {
  return (
    <li>
      <input
        checked={completed}
        type="checkbox"
        onChange={() => onCheckboxClick(id)}
      />
      <span className={completed ? "with-line-through" : ""}>{title}</span>
      <button onClick={() => onDeleteButtonClick(id)}>delete</button>
    </li>
  );
};

export default TodoListItem;
