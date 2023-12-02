import {Link} from "react-router-dom";

function Login() {
    return(
        <div className='auth'>
            <form className='auth__form'>
                <h1 className='auth__title'>Вход</h1>
                <input
                    className='auth__input'
                    type="email"
                    name="EmailInput"
                    id="email-input"
                    placeholder="Email"
                    required
                    // onChange={}
                    // value={}
                />
                <input
                    className='auth__input'
                    type="text"
                    name="PasswordInput"
                    id="password-input"
                    placeholder="Пароль"
                    required
                    // onChange={}
                    // value={}
                />
                <button className='auth__button'>Войти</button>
            </form>
        </div>
    )
}

export default Login