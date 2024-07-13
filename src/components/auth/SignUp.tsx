import {useNavigate} from 'react-router-dom';
import {createUserWithEmailAndPassword} from "firebase/auth";
import {Form} from './Form';
import { auth } from "../../firebase";
import { setUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hook/redux-hooks';

const SignUp = () => {
    const dispatch = useAppDispatch();
    const {navigate}: any = useNavigate();

    const handleRegister = (email: string, password: string) => {
      
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                // console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/');
            })
            .catch(() => alert("Введены неверные данные"))
    }

    return (
        <Form
            title="Регистрация"
            handleClick={handleRegister}
        />
    )
}

export {SignUp}