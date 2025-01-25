import { useState } from "react";
import Count from "./Count";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Feedback message based on the count
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  // Function to handle updating the count
  const handleUpdate = (value) =>
    setCount((prevCount) => Math.max(0, prevCount + value));

  return (
    <div className="counter">
      <h1>Simple Counter</h1>
      <Count value={count} />
      <p>{feedback}</p>
      {/* Buttons for various operations */}
      <Button handleClick={() => handleUpdate(1)} text="Add 1" />
      <Button handleClick={() => handleUpdate(-1)} text="Subtract 1" />
      <Button handleClick={() => handleUpdate(2)} text="Add 2" />
      <Button handleClick={() => handleUpdate(-2)} text="Subtract 2" />
    </div>
  );
};

export default Counter;
