import {Link} from "react-router-dom"
function Register() {
    return(
        <div className='auth'>
            <form className='auth__form'>
                <h1 className='auth__title'>Регистрация</h1>
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
                <button className='auth__button'>Зарегистрироваться</button>
            </form>
            <h2 className='auth__subtitle'>Уже зарегистрированы?&ensp;<Link to='/sign-in' className='auth__subtitle'>Войти</Link></h2>
        </div>
    )
}

export default Register