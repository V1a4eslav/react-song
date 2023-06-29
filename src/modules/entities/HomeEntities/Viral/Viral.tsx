import React, {useCallback, useRef, useState} from 'react';
import {SContainer} from 'modules/UIKit/SContainer';
import {SViralContent, SViralInner, SViralText, SViralTitle} from "./StyledComponents";
import {SVGComponent} from "./SVGComponent";
import {ArrowIcon} from "./ArrowIcon";
import {useIntersectionObserver} from "../../../../hooks/useIntersectionObserver";

export const Viral = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    const handleVisible = useCallback((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting){
            setVisible(true);
        }
    }, []);

    useIntersectionObserver(ref, handleVisible);

    return (
        <SContainer>
            <SViralInner ref={ref}>
                <SViralContent>
                <SViralTitle className={visible?'active':''}>Create a song and
                    <SViralText>
                        go viral!
                        <ArrowIcon/>
                    </SViralText>
                </SViralTitle>
                </SViralContent>
                <SVGComponent className={visible?'active':''}/>
            </SViralInner>
        </SContainer>
    );
};
