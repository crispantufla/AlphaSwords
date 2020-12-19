import {createContext, useState} from 'react';

export const LogedContext = createContext();

export const LogedContextProvider = ({children}) => {

    const [loged, setLoged] = useState();

    return(
        <LogedContext.Provider value={{loged, setLoged}}>
            {children}
        </LogedContext.Provider>
    )
}