import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../loginForm/LoginForm';
import './userPanel.scss';

const UserPanel = () => {
    return (
        <div className="user-panel">
            <div className="user-panel__container">
                <LoginForm />
                <Link>¿No tenes cuenta?¡Regístrate acá!</Link>
            </div>
        </div>
    );
};

export default UserPanel;