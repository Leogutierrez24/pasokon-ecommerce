import React from 'react';
import './loginForm.scss';

const LoginForm = () => {
    return(
        <div className="login-form">
            <form action="" method="POST">
                <h3 className="login-title">Iniciar sesión</h3>
                <input type="text" name="email" placeholder="Email" className="login-inputs" />
                <input type="password" name="contrasena" placeholder="*****" className="login-inputs" />
                <button className="login-btn">Ingresar</button>
            </form>
        </div>
    );
}

export default LoginForm;