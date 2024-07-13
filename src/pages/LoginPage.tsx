import { Link } from "react-router-dom";
import { Login } from "../components/auth/Login";

const LoginPage = () => {
  return (
    <div>
      <h1>Вход</h1>
      <Login />
      <p>
        Нет аккаунта?    <Link to="/register">зарегистроваться</Link>
      </p>
    </div>
  );
};

export default LoginPage;
