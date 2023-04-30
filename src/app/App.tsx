import React from 'react';
import {RouterProvider} from "react-router";
import {ThemeProvider} from "styled-components";
import {router} from './routing/router';
import {GlobalStyles} from "../modules/UIKit/GlobalStyles";
import {useTheme} from "../hooks/useTheme";

export const App = () => {
    const {theme} = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    )
};
