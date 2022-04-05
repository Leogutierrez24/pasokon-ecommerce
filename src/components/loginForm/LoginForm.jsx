import React from 'react';
import './loginForm.scss';

const LoginForm = () => {
    return(
        <div className="login-form">
            <h3 className="login-title">Iniciar sesión</h3>
            <form action="" method="POST">
                <label htmlFor='user'> Mail de usuario
                    <input type="text" name="email" className="login-inputs" id='user' autoFocus/>
                </label>
                <label htmlFor="user-pass"> Contraseña
                    <input type="password" name="contrasena" className="login-inputs" id='user-pass' />
                </label>
                <button className="login-btn">Ingresar</button>
            </form>
        </div>
    );
}

export default LoginForm;