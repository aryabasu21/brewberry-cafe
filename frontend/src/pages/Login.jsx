import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      navigate("/"); // Redirect to homepage on successful login
    } catch (error) {
      setError(error?.response?.data?.message || "Something went wrong");
    }
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}{" "}
        {/* Show error message if login fails */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="someone@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"} // Toggle between text and password input
                id="password"
                value={password}
                placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="show-password-label">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={handlePasswordToggle}
              />
              Show Password
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
          Don&apos;t have an account?{" "}
          <span onClick={() => navigate("/signup")}>Create one</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
