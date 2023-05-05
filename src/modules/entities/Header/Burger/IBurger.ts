import React from "react";

export interface IBurger {
    setMenuActive: React.Dispatch<React.SetStateAction<boolean>>,
    menuActive: boolean
}