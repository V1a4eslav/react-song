import React from "react";
import {useLocation} from "react-router";
import {ReactComponent as UserGradient} from 'assets/images/userGradient.svg';
import {ReactComponent as UserWhite} from 'assets/images/userWhite.svg';

export const IconUser = () => {
    const location = useLocation();

    return (
        <>
            { location.pathname === '/services' || location.pathname === '/auth'
                ? <UserWhite/> : <UserGradient/>}
        </>
    )
};
