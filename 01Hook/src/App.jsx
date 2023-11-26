import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);

  const addValue = () => {
    setCount(count + 1);
    // Concept of setCount
    // setCount(count + 1);  10 + 1 = 11
    // setCount(count + 1);  10 + 1 = 11
    // setCount(count + 1);  10 + 1 = 11

    // Updated Concept of setCount
    // setCount(prevCount => prevCount + 1);  10 + 1 = 11
    // setCount(prevCount => prevCount + 1);  11 + 1 = 12
    // setCount(prevCount => prevCount + 1);  12 + 1 = 13
    
  };
  const removeValue = () => {
    setCount(count - 1);
  };
  const resetValue = () => {
    setCount(10);
  };

  return (
    <>
      <h1>Return Skill</h1>
      <h2>Count: {count}</h2>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
      <button onClick={resetValue}>Reset</button>
      <h1>Display Count: {count}</h1>
    </>
  );
}

export default App;
