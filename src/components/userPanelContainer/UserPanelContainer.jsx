import React, { useState, useRef } from 'react';
import LoginForm from '../loginForm/LoginForm';
import SigninForm from '../signinForm/SigninForm';
import './userPanelContainer.scss';

const UserPanelContainer = () => {
    const [showForm, setShowForm] = useState(false);
    const theForm = useRef(null);

    const handleForm = () => {
        setShowForm(true);
        theForm.current.classList.add('show-form');
    };

    return (
        <div className="user-panel">
            <div className="user-panel__container">
                <div className='panel-col-1'>
                    <LoginForm />
                    <button className='create-account__btn' onClick={handleForm}>Crear cuenta</button>
                </div>
                <div className='panel-col-2' ref={theForm}>
                    {showForm && <SigninForm />}
                </div>
            </div>
        </div>
    );
};

export default UserPanelContainer;