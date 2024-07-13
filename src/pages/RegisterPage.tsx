import { Link } from 'react-router-dom';
import { SignUp } from '../components/auth/SignUp';

const RegisterPage = () => {
    return (
        <div>
            <h1>Регистрация</h1>
            <SignUp/>
            <p>
                У вас есть аккаунт? <Link to="/login">войти</Link>   
            </p> 
                   
        </div>
    )
}

export default RegisterPage;