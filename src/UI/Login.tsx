import { useNavigate } from "react-router-dom";
import "../Styles/login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // dummy login
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button onClick={handleLogin}>LOGIN</button>
      </div>
    </div>
  );
};

export default Login;
