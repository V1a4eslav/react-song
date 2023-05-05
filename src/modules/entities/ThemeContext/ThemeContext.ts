import {createContext} from "react";
import {themes} from "../../../app/theme";
import {IThemeContext} from "./IThemeContext";

export const ThemeContext = createContext<IThemeContext>({
    theme: themes.main,
    setTheme: () => {
    }
});
