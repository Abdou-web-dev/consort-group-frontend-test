import { LoginRightCard } from "./cards/LoginRightCard";
import { LoginForm } from "./forms/LoginForm";

const Login = () => {
  return (
    <div className="login-container">
      <LoginForm></LoginForm>
      <LoginRightCard></LoginRightCard>
    </div>
  );
};

export default Login;
