import React from 'react';

function useInput(initialValue = '') {
  const [input, setInput] = React.useState(initialValue);
  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  return [input, inputChangeHandler];
}

export default useInput;
