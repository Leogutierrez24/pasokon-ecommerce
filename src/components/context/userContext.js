import { createContext, useContext } from 'react';

const UserContext = createContext();

export const useLogin = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    return(
        <UserContext.Provider>
            { children }
        </UserContext.Provider>
    );
};