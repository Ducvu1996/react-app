import React, { useState } from 'react';

function Counter({ initialValue = 0, step = 1 }) {
  // State: count là giá trị hiện tại, setCount là hàm để cập nhật giá trị
  const [count, setCount] = useState(initialValue);

  // Hàm xử lý sự kiện tăng giá trị
  const handleIncrement = () => {
    setCount(count + step);
  };

  // Hàm xử lý sự kiện giảm giá trị
  const handleDecrement = () => {
    setCount(count - step);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Counter Component</h2>
      <p>Current count: {count}</p>
      <button onClick={handleIncrement}>Increment (+{step})</button>
      <button onClick={handleDecrement}>Decrement (-{step})</button>
    </div>
  );
}

export default Counter; 