import React from 'react';
import {SContainer} from 'modules/UIKit/SContainer';
import {SFMainInfoBlock, SFMainInfoIcon, SFNav, SFNavLink, SFooter, SFooterInfo, SFooterInner} from "./StyledComponent";
import {Logo} from "../../UIKit/Logo/Logo";
import LogoImg from "../../../assets/images/logoFooter.svg";
import imgNav from "../../../assets/images/navIcon.svg";
import imgTel from "../../../assets/images/telIcon.svg";
import {FooterFormBlock} from "./components/FooterFormBlock/FooterFormBlock";

export const Footer = () => {
    return (
        <SFooter>
            <SContainer>
                <SFooterInner>
                    <SFooterInfo>
                        <Logo iconSrc={LogoImg} textColor='#fff'/>
                        <SFMainInfoBlock>
                            <SFMainInfoIcon src={imgNav} alt={'navigate'}/>
                            13 Freeland Park, Lytchett Matravers, Poole, <br/> Dorset, United Kingdom, BH16 6FA
                        </SFMainInfoBlock>
                        <SFMainInfoBlock as={"a"} href="tel:03335006000">
                            <SFMainInfoIcon src={imgTel} alt={'navigate'}/>
                            Company contact number: <br/> 0333 500 6000
                        </SFMainInfoBlock>
                    </SFooterInfo>
                    <SFNav>
                        <SFNavLink to='/home'>Home</SFNavLink>
                        <SFNavLink to='/create'>Create</SFNavLink>
                        <SFNavLink to='/services'>Services</SFNavLink>
                        <SFNavLink to='/faq'>FAQ</SFNavLink>
                        <SFNavLink to='/faq'>Contact</SFNavLink>
                        <SFNavLink to='/faq'>Terms</SFNavLink>
                    </SFNav>
                    <FooterFormBlock/>
                </SFooterInner>
            </SContainer>
        </SFooter>
    );
};
