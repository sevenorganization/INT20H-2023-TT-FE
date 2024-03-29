import { AuthContext } from 'context/auth';
import React, { useState } from 'react';

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState<boolean>(!!sessionStorage.getItem('accessToken'));
    const authProvidedValue = { auth, setAuth };

    return (
        <AuthContext.Provider value={authProvidedValue}>{children}</AuthContext.Provider>
    )
}

export { AuthProvider };