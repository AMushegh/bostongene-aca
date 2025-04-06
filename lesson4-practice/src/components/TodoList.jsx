import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({
  todos,
  onTodoItemDeleteButtonClick,
  onTodoItemCheckboxClick,
}) => {
  if (!todos.length) {
    return <div>There are no todos</div>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          id={todo.id}
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          onCheckboxClick={onTodoItemCheckboxClick}
          onDeleteButtonClick={onTodoItemDeleteButtonClick}
        />
      ))}
    </ul>
  );
};

export default TodoList;
