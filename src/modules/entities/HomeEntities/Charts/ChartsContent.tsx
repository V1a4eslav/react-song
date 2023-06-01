import React, { ReactNode, useCallback, useRef, useState} from 'react';
import {ChartContentRef} from "./ChartContentRef";
import {useIntersectionObserver} from "../../../../hooks/useIntersectionObserver";

interface IChartsContent {
    children: ReactNode
}

export const ChartsContent =(props: IChartsContent) => {
    const componentRef = useRef<HTMLDivElement | null>(null);
    const [isActive, setIsActive] = useState(false);
    const handleAnimation = useCallback((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting && componentRef.current && !isActive) {
            setIsActive(true);
        }
    },[isActive])

    useIntersectionObserver(componentRef, handleAnimation);

    return (
        <ChartContentRef ref={componentRef} className={isActive ? 'active' : ''}>
            {props.children}
        </ChartContentRef>
    );
};