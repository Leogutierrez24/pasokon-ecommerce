import React, { useState } from 'react';
import { getFirestore } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './signinForm.scss';

const SigninForm = () => {
    const [inputName, setInputName] = useState('');
    const [inputSurname, setInputSurname] = useState('');
    const [inputMail, setInputMail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const handleName = (e) => {
        setInputName(e.target.value);
    }

    const handleSurname = (e) => {
        setInputSurname(e.target.value);
    }

    const handleEmail = (e) => {
        setInputMail(e.target.value);
    }

    const handlePassword = (e) => {
        setInputPassword(e.target.value);
    }

    const createUser = (e) => {
        e.preventDefault();
        // creo el usuario
        const user = {
            name: inputName,
            surname: inputSurname,
            email: inputMail,
            password: inputPassword,
        }
        // envío el nuevo usuario a la db de firebase
        const db = getFirestore(); 
        const usersCollection = collection(db, 'users'); //seteo la colección de firebase

        addDoc(usersCollection, user).catch(console.log('ocurrió un error'));
    }

    return(
        <div className="signin-form">
            <h3 className='signin-title'>Registrarse</h3>
            <form action="" method="POST">
                <label htmlFor="name"> Nombre
                    <input type="text" name="nombre" id="name" className='signin-input' value={inputName} onChange={handleName} />
                </label>
                <label htmlFor="surname"> Apellido
                    <input type="text" name="apellido" id="surname" className='signin-input' value={inputSurname} onChange={handleSurname} />
                </label>
                <label htmlFor="mail"> Email
                    <input type="text" name="email" id="mail" className='signin-input' value={inputMail} onChange={handleEmail} />
                </label>
                <label htmlFor="password" > Contraseña
                    <input type="password" name="contrasena" id="password" className='signin-input' value={inputPassword} onChange={handlePassword} />
                </label>
                <input type="password" name="verif-contrasena" placeholder="Verificá tu contraseña" className='signin-input' />
                <button className='signin-btn' onClick={e => createUser(e)}>Crear cuenta</button>
            </form>
        </div>
    );
};

export default SigninForm;