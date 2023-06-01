import React from 'react';
import {SContainer} from 'modules/UIKit/SContainer';
import {SGridContainer, SGridItem, SGridItemImg, SGridItemText, SHowItWork, STitle} from "./StyledComponents";
import First from 'assets/images/Home/HowItWork/1.svg';
import Two from 'assets/images/Home/HowItWork/2.svg';
import Three from 'assets/images/Home/HowItWork/3.svg';
import Four from 'assets/images/Home/HowItWork/4.svg';


export const HowItWork =() => {
    return (
        <SHowItWork>
            <SContainer>
                <STitle>
                    How it works
                </STitle>
                <SGridContainer>
                    <SGridItem>
                        <SGridItemImg>
                            <img src={First} alt="piano"/>
                        </SGridItemImg>
                        <SGridItemText>
                            Create a music project and tell us what you want
                        </SGridItemText>
                    </SGridItem>
                    <SGridItem>
                        <SGridItemImg>
                            <img src={Two} alt="sound Machine"/>
                        </SGridItemImg>
                        <SGridItemText>
                            We provide you with lyrics, beats and complete songs
                        </SGridItemText>
                    </SGridItem>
                    <SGridItem>
                        <SGridItemImg>
                            <img src={Three} alt="vocal"/>
                        </SGridItemImg>
                        <SGridItemText>
                            Review your project until you are 100% satisfied
                        </SGridItemText>
                    </SGridItem>
                    <SGridItem>
                        <SGridItemImg>
                            <img src={Four} alt="Sign"/>
                        </SGridItemImg>
                        <SGridItemText>
                            Sign your agreement and keep all royalities
                        </SGridItemText>
                    </SGridItem>
                </SGridContainer>
            </SContainer>
        </SHowItWork>
    );
};
