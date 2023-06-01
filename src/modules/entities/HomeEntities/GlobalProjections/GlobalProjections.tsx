import React from 'react';
import {SContainer} from 'modules/UIKit/SContainer';
import {SGlobalSection} from "./StyledComponents";
import {TitleBlock} from "../../../UIKit/TitleBlock/TitleBlock";
import {GlobalItems} from "./GlobalItems";



export const GlobalProjections = () => {
    return (
        <SGlobalSection>
            <SContainer>
                <TitleBlock>Global Projections</TitleBlock>
                <GlobalItems/>
            </SContainer>
        </SGlobalSection>
    );
};
