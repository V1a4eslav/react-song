import React from 'react';
import {ILogo} from "./ILogo";
import {SLogoContainer, SLogoText} from "./SLogo";


export const Logo = ({iconSrc,textColor}:ILogo) => {
    return (
        <SLogoContainer to='/home'>
            <img src={iconSrc} alt="logo"/>
            <SLogoText color={textColor}>TypeSong</SLogoText>
        </SLogoContainer>
    );
};
