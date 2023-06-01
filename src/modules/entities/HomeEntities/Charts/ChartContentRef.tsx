import React, {forwardRef, ReactNode} from 'react';
import { SChartsContent } from './StyledComponents';

interface IChartsContent{
    children:ReactNode,
    className:string
}

export const ChartContentRef = forwardRef<HTMLDivElement, IChartsContent>((props, ref) => {
    return (
        <SChartsContent ref={ref} className={props.className}>
            {props.children}
        </SChartsContent>
    );
});
