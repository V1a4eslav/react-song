import {SContainer} from 'modules/UIKit/SContainer';
import React, {useCallback, useRef} from 'react';
import {SProcessItem, SProcessItemWrapper, SProcessSection} from "./StyledComponents";
import {ArrowStepSVG} from "./components/ArrowStep";
import {SvgCreate} from "./components/SvgCreate";
import {SvgSubmit} from "./components/SvgSubmit";
import {SvgReview} from "./components/SvgReview";
import {SvgSign} from "./components/SvgSign";
import {useIntersectionObserver} from "../../../../hooks/useIntersectionObserver";

export const Process = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    const handleActive = useCallback((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting &&
            ref.current &&
            !ref.current.classList.contains('active')) {
            ref.current.classList.add('active');
        }
    }, []);

    useIntersectionObserver(ref, handleActive)

    return (
        <SContainer>
            <SProcessSection ref={ref}>
                <SProcessItemWrapper className='create-wrapper'>
                    <SProcessItem>Create</SProcessItem>
                    <SvgCreate/>
                </SProcessItemWrapper>
                <ArrowStepSVG className={'arrow arrow1'}/>
                <SProcessItemWrapper className='submit-wrapper'>
                    <SProcessItem>Submit</SProcessItem>
                    <SvgSubmit/>
                </SProcessItemWrapper>
                <ArrowStepSVG className={'arrow arrow2'}/>
                <SProcessItemWrapper className='review-wrapper'>
                    <SProcessItem>Review</SProcessItem>
                    <SvgReview/>
                </SProcessItemWrapper>
                <ArrowStepSVG className={'arrow arrow3'}/>
                <SProcessItemWrapper className='sign-wrapper'>
                    <SProcessItem>Sign</SProcessItem>
                    <SvgSign/>
                </SProcessItemWrapper>
            </SProcessSection>
        </SContainer>
    );
};
