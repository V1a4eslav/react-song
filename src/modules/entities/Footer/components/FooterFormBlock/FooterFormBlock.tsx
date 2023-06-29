import React from 'react';
import { SFooterFormBlock, SFormInput, SFormInputWrapper, SFormTitle } from './StyledComponent';
import {FormButton} from "./FormButton";
import {FooterMessengers} from "../FooterMessegers/FooterMessengers";


export const FooterFormBlock = () => {
    return (
        <SFooterFormBlock>
            <SFormTitle>Stay in Touch</SFormTitle>
            <SFormInputWrapper>
                <SFormInput type="email" placeholder="E-mail"/>
                <FormButton/>
            </SFormInputWrapper>
            <FooterMessengers/>
        </SFooterFormBlock>
    );
};
