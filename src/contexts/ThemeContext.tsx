import { PropTypes } from '@mui/material';
import React, { createContext, ReactNode, useState } from 'react';

interface ThemeContextProps {
    children: ReactNode
}

interface ThemeContextDefault {
    theme: PropTypes.Color,
    toggleTheme : (theme : PropTypes.Color) => void
}

const ThemeContextDefaultData : ThemeContextDefault = {
    theme: 'secondary' as PropTypes.Color,
    toggleTheme : (theme : PropTypes.Color) => {}
}

export const ThemeContext = createContext<ThemeContextDefault>(ThemeContextDefaultData);

const ThemeContextProvider = ({children} : ThemeContextProps) => {
    const [theme, setTheme] = useState(ThemeContextDefaultData.theme);
    const toggleTheme = (theme : PropTypes.Color) : void => {
        setTheme(theme);
    }
    const ThemeContextDynamicData : ThemeContextDefault = {theme, toggleTheme} ;
    return <ThemeContext.Provider value={ThemeContextDynamicData}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider;
