import React, {ReactNode} from 'react';
import {SMessengersItem} from "./StyledComponents";

interface IMessengersItem{
    children:ReactNode,
    to:string
}

export const MessengersItem = ({children,to}:IMessengersItem) => {
    return (
        <SMessengersItem to={to}>
            {children}
        </SMessengersItem>
    );
};
