import React from 'react';
import './signinForm.scss';

const SigninForm = () => {
    return(
        <div className="signin-form">
            <form action="" method="POST">
                <label htmlFor="name" /> Nombre
                <input type="text" name="nombre" id="name"  />
                <label htmlFor="surname" /> Apellido
                <input type="text" name="apellido" id="surname"  />
                <label htmlFor="mail" /> Email
                <input type="text" name="email" id="mail" />
                <label htmlFor="" /> Contraseña
                <input type="password" name="contrasena" />
                <input type="password" name="verif-contrasena" placeholder="Verificá tu contraseña" />
                <button>Crear cuenta</button>
            </form>
        </div>
    );
};

export default SigninForm;