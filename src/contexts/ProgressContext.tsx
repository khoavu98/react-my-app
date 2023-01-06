import React, { createContext, ReactNode } from 'react';

interface ProgressContextProviderProps {
    children: ReactNode
}
const progressDefault = {
    lastTime: '30/05/2022',
    status: 'In Progress'
}
export const ProgressContext = createContext(progressDefault);

const ProgessContextProvider = ({ children }: ProgressContextProviderProps) => {

    return <ProgressContext.Provider value={progressDefault}>
        {children}
    </ProgressContext.Provider>
}

export default ProgessContextProvider