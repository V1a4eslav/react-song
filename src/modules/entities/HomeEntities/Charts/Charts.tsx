import React, {forwardRef} from 'react';
import {SContainer} from 'modules/UIKit/SContainer';
import {SCharts, SChartsInner} from "./StyledComponents";
import {SVGComponent} from "./SVGComponent";
import {Presentation} from "./Presentation";
import {ChartsContent} from "./ChartsContent";

export const Charts = forwardRef<HTMLDivElement, any>((props, ref) => {
    return (
        <SCharts ref={ref}>
            <ChartsContent>
                <SVGComponent/>
                <SContainer>
                    <SChartsInner>
                        <Presentation/>
                    </SChartsInner>
                </SContainer>
            </ChartsContent>
        </SCharts>
    );
});
