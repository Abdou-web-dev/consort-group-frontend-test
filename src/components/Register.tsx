// src/components/Register.js
import { Button, Input, message } from "antd";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { hashAndSalt } from "../utils/auth";
import "./styles.scss";

const Register = () => {
  let navigate = useNavigate();
  const { isConnected, setIsConnected } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailStatus, setEmailStatus] = useState<
    "" | "warning" | "error" | undefined
  >("");
  const [passwordStatus, setPasswordStatus] = useState<
    "" | "warning" | "error" | undefined
  >("");

  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; //to validate email
  var regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,26}$/; //to validate password
  var regular_expression_pwd =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  // I use the following script for min 8 letter password, with at least a symbol, upper and lower case letters and a number

  const isEmailValid: boolean = expression.test(email);
  const isPasswordStrong: boolean = regular_expression_pwd.test(password);

  const handleRegister = () => {
    if (!email.length || !password.length) {
      return;
    } else {
      // Hash and salt the password (use a secure library for this in production)
      const hashedPassword = hashAndSalt(password);

      // Store the user email in localStorage
      localStorage.setItem("email", JSON.stringify(email));
      // Store the user hashed password in localStorage
      localStorage.setItem("password", JSON.stringify(hashedPassword));

      if (email && isEmailValid && password && isPasswordStrong) {
        handleConnect();
        // Clear the form
        setEmail("");
        setPassword("");
      }
    }
  };

  const handleConnect = () => {
    setIsConnected(true);
    // console.log(isConnected, "isConnected");
    navigate("/");
  };

  function validateFields() {
    if (email && !isEmailValid) {
      message.warning("type a valid email address", 0.8);
    }
    if (password && !isPasswordStrong) {
      message.warning("type a strong password", 0.8);
    }
    if (!email) {
      setEmailStatus("error");
      message.warning("type an email address", 0.8);
    } else {
      setEmailStatus("");
    }
    if (!password) {
      message.warning("type a password", 0.8);
      setPasswordStatus("error");
    } else {
      setPasswordStatus("");
    }
  }

  return (
    <div className="login-form-container reg-form-container">
      <h2>Type your credentials to create a new account :</h2>
      <div className="login-form-email-pwd-wrapper">
        <div className="login-form-email">
          <label>Email :</label>
          <Input
            className={"email-login-input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            status={emailStatus}
            placeholder={"Enter your email :"}
            allowClear
          />
        </div>
        <div className="login-form-password">
          <label>Password :</label>
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={"email-login-input"}
            status={passwordStatus}
            placeholder={"Enter your password :"}
            allowClear
            // type="password"
          />
        </div>
      </div>

      <Button
        className="reg-btn"
        onClick={() => {
          validateFields();
          handleRegister();
        }}
      >
        <span>Register</span>
      </Button>
    </div>
  );
};

export default Register;
