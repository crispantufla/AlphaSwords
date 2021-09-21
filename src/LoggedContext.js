import {createContext, useState, useEffect} from 'react';

export const LoggedContext = createContext();

export const LoggedContextProvider = ({ children }) => {
    const [logged, setlogged] = useState();

    useEffect( () => {
        if (localStorage.getItem('token')) {
            setlogged(true);
        }
        else {
            setlogged(false);
        }
    }, [])

    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        setlogged(false);
    }

    const logIn = (token, id) => {
        localStorage.setItem("token", token);
        localStorage.setItem("id", id);
        setlogged(true);
    }

    return (
        <LoggedContext.Provider value={{logged, setlogged, logOut, logIn}}>
            {children}
        </LoggedContext.Provider>
    )
}