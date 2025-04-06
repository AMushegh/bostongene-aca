import React, { useState } from "react";

const TodoAddSection = ({ onAddTodoButtonClick, hideAfterClick = true }) => {
  const [inputValue, setInputValue] = useState("");

  const clickHandler = () => {
    onAddTodoButtonClick(inputValue);
    if (hideAfterClick) {
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={clickHandler}>Add</button>
    </div>
  );
};

export default TodoAddSection;
