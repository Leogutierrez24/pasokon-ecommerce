import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from '../loginForm/LoginForm';
import SigninForm from '../signinForm/SigninForm';
import './userPanelContainer.scss';

const UserPanelContainer = () => {
    const [redirect, setRedirect] = useState(false);

    const redirectData = (data) => {
        setRedirect(data);
    }

    return (
        <div className="user-panel">
            <div className="user-panel__container">
                <LoginForm />
                {
                    (redirect)
                        ? <Redirect to='/account' />
                        : <SigninForm check={redirectData} />
                }
            </div>
        </div>
    );
};

export default UserPanelContainer;