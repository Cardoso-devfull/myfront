"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState("MYFRONT");  

    return (
        <AppContext.Provider value={{
            user
        }}>
            {children}
        </AppContext.Provider>
    )
}