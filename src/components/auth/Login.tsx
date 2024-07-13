
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Form } from "./Form";
import { setUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../hook/redux-hooks";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
       signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
    
        navigate("/");
      })
      .catch(() => alert("Нет такого пользователя!"));
  };

  return <Form title="Войти" handleClick={handleLogin} />;
};

export { Login };
