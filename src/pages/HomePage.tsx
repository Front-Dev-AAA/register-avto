import { Navigate } from "react-router-dom";
import { removeUser } from "../store/slices/userSlice";
import { useAuth } from "../hook/use-auth";
import "./HomePage.css";
import { useAppDispatch } from "../hook/redux-hooks";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const { isAuth, email } =  useAuth();

  return isAuth ? (
    <div>
      <h1>Домашняя страница</h1>

      <button className="myBtn" onClick={() => dispatch(removeUser())}>
        Покинуть аккаунт {email}
      </button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;