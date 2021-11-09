import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = props => {
    const [username, setUsername] = useState('')
    sessionStorage.setItem(username, 'jvaps')

return (
    <AuthContext.Provider value = {{ username, setUsername}}>
        {props.children}
    </AuthContext.Provider>
)}