import { useState } from "react";
import "../styles/SmallProject.css";

const SmallProject = () => {
  const [count, setCount] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [number, setNumber] = useState(10);
  const [password, setPassword] = useState("");

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to increase count
  const increaseCount = () => {
    if (count < number) {
      setCount(count + 1);
    }
  };

  // Function to decrease count
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Function to reset count
  const resetCount = () => {
    setCount(0);
  };

  // Function to generate a random number between 1 and 20
  const randomNumberGenerator = () => {
    setNumber(Math.floor(Math.random() * 20) + 1);
    setCount(0);
  };

  // Function to determine password strength
  const getPasswordStrength = () => {
    if (password.length < 4) return "Weak";
    if (password.length < 8) return "Medium";
    return "Strong";
  };

  return (
    <div className="App">
      <div className="App-header">
        <input
          className="inpbtn"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          placeholder="Enter a number"
          type="number"
        />
        <button onClick={randomNumberGenerator}>Generate Number</button>
        <h2>Count (max: {number}): {count}</h2>

        {/* Progress bar */}
        <div
          className="progress-container"
          style={{ width: "100%", background: "#ccc", height: "10px", marginTop: "10px" }}
        >
          <div
            className="progress-bar"
            style={{
              width: `${(count / number) * 100}%`,
              height: "10px",
              background: "green",
            }}
          ></div>
        </div>

        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
        <br />

        {/* Password Input */}
        <div>
          <input
            className="inpbtn"
            value={password}
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
          </button>
          <p>Password Strength: {getPasswordStrength()}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallProject;

