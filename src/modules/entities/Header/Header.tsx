import React, {useContext, useEffect, useState} from 'react';

import LogoImg from 'assets/images/Logo.svg';
import {SContainer} from "../../UIKit/SContainer";
import {SHeader, SHeaderLink, SHeaderMenu, SHeaderNav} from "./SHeader";
import {useLocation} from "react-router";
import {themes} from "../../../app/theme";
import {ThemeContext} from "../ThemeContext/ThemeContext";
import {Logo} from "../../UIKit/Logo/Logo";
import {User} from "./User/User";
import {Burger} from "./Burger/Burger";
import {HeaderMenu} from "./HeaderMenu";

export const Header = () => {
    const location = useLocation();
    const {setTheme} = useContext(ThemeContext);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        setMenuActive(false)
    }, [location]);

    useEffect(() => {
        if (location.pathname === '/services') {
            setTheme(themes.dark)
        } else {
            setTheme(themes.main)
        }
    }, [location.pathname]);

    return (
        <SHeader>
            <SContainer>
                <SHeaderNav>
                    <Logo iconSrc={LogoImg}/>
                    <HeaderMenu  menuActive={menuActive}>
                        <SHeaderLink to='/home'>Home</SHeaderLink>
                        <SHeaderLink to='/create'>Create</SHeaderLink>
                        <SHeaderLink to='/services'>Services</SHeaderLink>
                        <SHeaderLink to='/faq'>Contact / FAQ</SHeaderLink>
                    </HeaderMenu>
                    <User/>
                    <Burger setMenuActive={setMenuActive} menuActive={menuActive}/>
                </SHeaderNav>
            </SContainer>
        </SHeader>
    );
};


