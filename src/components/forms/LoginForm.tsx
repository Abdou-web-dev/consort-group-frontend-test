import { Button, Checkbox, Input, message } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import bcrypt from "bcryptjs";
import { FunctionComponent, MouseEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../../assets/img/google-color.svg";
import { AuthContext } from "../../context/AuthContext";

interface Props {}

export const LoginForm: FunctionComponent<Props> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const { isConnected, setIsConnected } = useContext(AuthContext);
  let navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [emailStatus, setEmailStatus] = useState<
    "" | "warning" | "error" | undefined
  >("");
  const [passwordStatus, setPasswordStatus] = useState<
    "" | "warning" | "error" | undefined
  >("");

  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; //to validate email
  var regular_expression_pwd =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const isEmailValid: boolean = expression.test(email);
  const isPasswordStrong: boolean = regular_expression_pwd.test(password);

  const handleConnect = () => {
    setIsConnected(true);
    // console.log(isConnected, "isConnected");
    navigate("/");
  };

  const handleLogin = () => {
    if (!email.length || !password.length) {
      return;
    } else {
      // Retrieve the stored user data
      // a simpler approach is to use ?? to add a fallback value as an alternative to localstorage.getitem('email')
      const email_reg = JSON.parse(localStorage.getItem("email") ?? "");
      // console.log(email_reg, "email_reg");
      const password_reg = JSON.parse(localStorage.getItem("password") ?? "");

      // const auth:boolean = json.parse(localstorage.getitem('auth') ?? "false");
      // yourHashedPassword === password_reg
      // Synchronously tests a string against a hash with compareSync method

      const doesPasswordMatch: boolean = bcrypt.compareSync(
        password,
        password_reg
      );

      if (email_reg === email && doesPasswordMatch === true) {
        // User is authenticated
        // Set some state or context to indicate the user is logged in
        if (isEmailValid) {
          handleConnect();
          // Clear the form
          setEmail("");
          setPassword("");
        }
      } else {
        // Authentication failed
        // Handle the error
        console.log("Login failed. Please check your email and password.");
      }
    }
  };
  const onCheckChange = (e: CheckboxChangeEvent) => {
    // console.log("checked = ", e.target.checked);
    setChecked(e.target.checked);
  };
  function handleGoogleLogin(
    event: MouseEvent<HTMLElement, MouseEvent> | any
  ): void {
    throw new Error("Function not implemented.");
  }

  function validateFields() {
    const email_reg = JSON.parse(localStorage.getItem("email") ?? "");
    const password_reg = JSON.parse(localStorage.getItem("password") ?? "");
    const doesPasswordMatch: boolean = bcrypt.compareSync(
      password,
      password_reg
    );
    let doesEmailMatch = email_reg !== email;
    if (doesEmailMatch) {
      message.warning("invalid email", 0.8);
    }
    if (doesPasswordMatch === false) {
      message.warning("invalid password", 0.8);
    }

    if (!email) {
      message.warning("type your email address", 0.8);
      setEmailStatus("error");
    } else {
      setEmailStatus("");
    }
    if (!password) {
      message.warning("type your password", 0.8);
      setPasswordStatus("error");
    } else {
      setPasswordStatus("");
    }
  }

  // exmaples of strong passwords : GIDA!%#sEuvTxNKS53#Cn&u& ,GuZI5Ct8%eCMsM*PMpHbBAjd , bvj+)nTVVr&ESher$FUSjnK8

  return (
    <div className="login-form-container">
      <div className="login-form-header">
        <div className="login-form-header-inner">
          <h2>Welcome back</h2>
          <p>Welcome back ! Please enter your details : </p>
        </div>
      </div>
      <div className="login-form-email-pwd-wrapper">
        <div className="login-form-email">
          <label>Email</label>
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
          <label>Password</label>
          <Input.Password
            // type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={"email-login-input"}
            status={passwordStatus}
            placeholder={"Enter your password :"}
            allowClear
          />
        </div>
      </div>
      <div className="login-form-checkbox-forgot-wrapper">
        <Checkbox
          className="checkbox"
          checked={checked}
          onChange={onCheckChange}
        >
          <span>Remember for 30 days</span>
        </Checkbox>
        <Button className="forgot-btn">
          <span>Forgot password</span>
        </Button>
      </div>
      <div className="login-form-signin-btns-wrapper">
        <Button
          className="login-form-signin-btn"
          onClick={() => {
            validateFields();
            handleLogin();
          }}
        >
          <span>Sign in</span>
        </Button>
        <Button
          icon={
            <>
              <img src={google} alt="" width={`25px`} />
            </>
          }
          className="login-form-g-signin-btn"
          onClick={handleGoogleLogin}
        >
          <span> Sign in with Google</span>
        </Button>
      </div>

      <div className="login-form-signup-btn-wrapper">
        <span className="signup-text-1"> Don't have an account ?</span>
        <Button className="signup-btn" onClick={() => navigate("/register")}>
          <span className="signup-text-2">Sign up for free</span>
        </Button>
      </div>
    </div>
  );
};
