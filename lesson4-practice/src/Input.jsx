import React, { useEffect, useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    console.warn(debouncedValue + "23478672386__");
  }, [debouncedValue]);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <input
      type="text"
      onChange={({ target: { value } }) => {
        setValue(value);
      }}
    />
  );
};

export default Input;
