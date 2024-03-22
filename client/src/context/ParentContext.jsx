import { useAuth0 } from '@auth0/auth0-react';
import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const ParentContext = ({ children }) => {
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
    const [userProfile, setUserProfile] = useState({})

    return <AppContext.Provider value={{ loginWithRedirect, isAuthenticated, user, logout, userProfile, setUserProfile}}>
        {children}
    </AppContext.Provider>
}

export default ParentContext