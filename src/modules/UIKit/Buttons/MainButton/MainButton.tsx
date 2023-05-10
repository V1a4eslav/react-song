import React, {ReactNode} from 'react';
import { SMainButton } from './SMainButton';

export interface IMainButton{
    color:string,
    padding:string,
    bgColor:string,
    br:string,
    margin?:string,
    children:ReactNode
}

export const MainButton = (props:IMainButton) => {
    return (
        <SMainButton {...props}>
            {props.children}
        </SMainButton>
    );
};
