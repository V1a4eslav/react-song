import React from 'react';
import {SFormButton} from "./StyledComponent";

export const FormButton = () => {
    return (
        <SFormButton type='button'>
            <svg viewBox="0 0 30 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Arrow 7" opacity="0.7" d="M29.0037 8.50691C29.3942 8.11638 29.3942 7.48322 29.0037 7.09269L22.6397 0.728735C22.2492 0.33821 21.616 0.33821 21.2255 0.728735C20.835 1.11926 20.835 1.75242 21.2255 2.14295L26.8823 7.7998L21.2255 13.4567C20.835 13.8472 20.835 14.4803 21.2255 14.8709C21.616 15.2614 22.2492 15.2614 22.6397 14.8709L29.0037 8.50691ZM0.241211 8.7998L28.2965 8.7998L28.2965 6.7998L0.241211 6.7998L0.241211 8.7998Z" fill="white"/>
            </svg>
        </SFormButton>
    );
};