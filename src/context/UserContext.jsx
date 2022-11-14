import { createContext, useContext, useState } from "react";

export const usercontext = createContext();

///////// context

const UserProvider = ({children}) => {

    const [user, setUser] = useState(false)
    return (
        <usercontext.Provider value={{user, setUser}}>
            {children}
        </usercontext.Provider>
    )
}

export default UserProvider;
// OPTIMIZE CALL
export const uuContext = () => useContext(usercontext);