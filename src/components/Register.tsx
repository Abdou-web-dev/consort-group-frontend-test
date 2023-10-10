// src/components/Register.js
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { hashAndSalt } from "../utils/auth";

const Register = () => {
  const { isConnected, setIsConnected } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleRegister = () => {
    // Hash and salt the password (use a secure library for this in production)
    const hashedPassword = hashAndSalt(password);

    // Store the user email in localStorage
    localStorage.setItem("email", JSON.stringify(email));
    // Store the user hashed password in localStorage
    localStorage.setItem("password", JSON.stringify(hashedPassword));

    // Clear the form
    setEmail("");
    setPassword("");
    handleConnect();
    // alert("Registration successful!");
  };

  const handleConnect = () => {
    setIsConnected(true);
    // console.log(isConnected, "isConnected");
    navigate("/");
  };

  return (
    <div>
      <h2>Register</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
