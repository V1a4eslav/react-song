import React, {useState} from 'react';
import {RouterProvider} from "react-router";
import {ThemeProvider} from "styled-components";
import {router} from './routing/router';
import {GlobalStyles} from "../modules/UIKit/GlobalStyles";
import {themes} from "./theme";
import {ThemeContext} from 'modules/entities/ThemeContext/ThemeContext';

export const App = () => {
    const [theme, setTheme] = useState(themes.main);

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
};
