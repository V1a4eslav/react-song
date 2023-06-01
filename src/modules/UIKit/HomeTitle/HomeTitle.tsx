import React, {ReactNode} from 'react';
import {SHomeTitle} from "./StyledComponents";

export interface IHomeTitle{
    children:ReactNode,
    color?:string,
    ta?:string,
}

export const HomeTitle = (props:IHomeTitle) => {
    return (
        <SHomeTitle {...props}>
            {props.children}
        </SHomeTitle>
    );
};
