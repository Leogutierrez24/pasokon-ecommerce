import { useState, createContext, useContext } from 'react';

const UserContext = createContext();

export const useLogin = () => useContext(UserContext);

export const UserProvider = ({ children }) => {

    /*
    Qué funciones hay que crear ??? --> 
    1) Hay que verificar si hay un usuario logeado o no ? mostrar el usuario : registrarse o logearse
    */
    const [user, setUser] = useState(false);



    return(
        <UserContext.Provider>
            { children }
        </UserContext.Provider>
    );
};