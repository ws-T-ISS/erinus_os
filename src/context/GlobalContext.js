import React, { createContext, useState } from 'react';

const default_value = {showSidebar: undefined}

export const GlobalContext = createContext(default_value)

export const GlobalProvider = ({children}) => {
    const [showSidebar, setShowSidebar] = useState(default_value.showSidebar)
    const handleActiveSidebar = () => {
        setShowSidebar(true)
    }
    function handleDeactiveSidebar(){
        setShowSidebar(false)
    }
    function handleResetSidebar(){
        setShowSidebar(undefined)
    }
    return (
        <GlobalContext.Provider value={{
            showSidebar,
            handleActiveSidebar,
            handleDeactiveSidebar,
            handleResetSidebar
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
