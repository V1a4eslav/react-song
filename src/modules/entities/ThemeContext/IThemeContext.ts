import {Theme} from "../../../app/theme/themeInterface";
import React from "react";

export interface IThemeContext {
    theme?: Theme,
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
}