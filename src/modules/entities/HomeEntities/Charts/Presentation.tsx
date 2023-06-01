import React from 'react';
import {SMainButton, SPresentationText, SPresentationTitle} from "./StyledComponents";

export const Presentation = () => {
    return (
        <>
            <SPresentationTitle>
                Watch your Music climb the charts!
            </SPresentationTitle>
            <SPresentationText>
                Hire our team to create music tailored to Radio playlist and boost streams
            </SPresentationText>
            <SMainButton padding={'17px 20px'} bgColor={'#fff'} br={'5px'} color={'#55287d'}>
                Create Project
            </SMainButton>
        </>
    );
};
