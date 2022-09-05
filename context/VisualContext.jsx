import React, { createContext, useContext, useState } from "react";

const defaultContext = {
    appMode: 'dark',
    setAppModeHandler: ()=>{}
}

const VisualContext = createContext(defaultContext)

const VisualWrapper = ({children})=>{
    const [appMode, setAppMode] = useState('light')
    const setAppModeHandler = ()=>{
        console.log('Changing')
        appMode === 'light' ? setAppMode('dark') : setAppMode('light')
    }
    const context = {
        appMode: appMode,
        setAppModeHandler: setAppModeHandler
    }

    return (
        <VisualContext.Provider value={context}>
            {children}
        </VisualContext.Provider>
    )
}

export const useVisualContext = ()=>{
    return useContext(VisualContext);
}

export default VisualWrapper;