import React, { useState } from "react";
import { StorageService } from "../services/StorageService";
import { TODO_LIST_STORAGE_KEY } from "../constants/storageKeys";
import TodoList from "./TodoList";
import TodoAddSection from "./TodoAddSection";

const getInitialState = () => {
  return StorageService.getItem(TODO_LIST_STORAGE_KEY) ?? [];
};

export const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialState());

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        title,
        id: Date.now(),
        completed: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const toggleTodo = (id) => {
    const changedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(changedTodos);
  };

  return (
    <div className="test">
      <TodoAddSection onAddTodoButtonClick={addTodo} />
      <TodoList
        todos={todos}
        onTodoItemCheckboxClick={toggleTodo}
        onTodoItemDeleteButtonClick={deleteTodo}
      />
      <div>
        <button
          onClick={() => StorageService.setItem(TODO_LIST_STORAGE_KEY, todos)}
        >
          save
        </button>
      </div>
    </div>
  );
};
