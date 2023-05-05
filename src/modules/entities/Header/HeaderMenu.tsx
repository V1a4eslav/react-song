import React, {ReactNode} from 'react';
import {SHeaderMenu} from './SHeader';

interface IHeaderMenu {
    children: ReactNode,
    menuActive: boolean
}

export const HeaderMenu = ({children, menuActive}: IHeaderMenu) => {
    return (
        <SHeaderMenu className={menuActive ? 'active' : ''}>
            {children}
        </SHeaderMenu>
    );
};
