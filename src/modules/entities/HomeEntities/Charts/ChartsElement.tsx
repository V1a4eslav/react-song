import React, {useCallback, useEffect, useRef, useState} from 'react';
import {animateScroll as scroll, Element, Events} from 'react-scroll';
import {useMatchMedia} from "../../../../hooks/useMatchMedia";
import {useIntersectionObserver} from "../../../../hooks/useIntersectionObserver";
import {Charts} from "./Charts";


export const ChartsElement = () => {
    const chartsRef = useRef<HTMLDivElement>(null);
    const [isAnimation, setIsAnimation] = useState(false);
    const {isMobile} = useMatchMedia();

    const handlerIO = useCallback((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting && !isAnimation && chartsRef.current && !isMobile && !isAnimation) {
                scroll.scrollTo(chartsRef.current.offsetTop, {
                    duration: 700,
                    smooth: 'true',
                });
            }

        },
        [isAnimation, chartsRef.current, isMobile]);

    useIntersectionObserver(chartsRef, handlerIO, undefined, !isMobile);

    const handleWheel = useCallback((event: WheelEvent) => {
        if (isAnimation) {
            event.preventDefault();
        }
    }, [isAnimation]);

    Events.scrollEvent.register('begin', function (to, element) {
        setIsAnimation(true);
    });

    Events.scrollEvent.register('end', function (to, element) {
        setTimeout(() => setIsAnimation(false), 700);
    });

    useEffect(() => {
        if (chartsRef.current) {
            document.addEventListener('wheel', handleWheel, {passive: false});
        }
        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
            if (chartsRef.current) {
                document.removeEventListener('wheel', handleWheel);
            }
        };
    }, [handleWheel]);


    return (
        <>
            <Element name="charts">
                <Charts ref={chartsRef}/>
            </Element>
        </>
    );
};