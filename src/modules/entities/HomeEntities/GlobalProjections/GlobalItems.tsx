import React, {useRef, useState} from 'react';
import {SCountStreams, SGlobalImg, SGlobalItem, SGlobalItems, SStreamsTitle} from "./StyledComponents";
import streamsSvg from 'assets/images/Home/GlobalProjections/streaming.svg';
import revergeSvg from 'assets/images/Home/GlobalProjections/revenge.svg';
import market from 'assets/images/Home/GlobalProjections/market.svg';
import CountUp from 'react-countup';
import {useIntersectionObserver} from "../../../../hooks/useIntersectionObserver";


export const GlobalItems = () => {
    console.log(1)
    return (
        <>
            <SGlobalItems>
                <SGlobalItem>
                    <SGlobalImg src={streamsSvg}/>
                    <CountUp decimals={1}
                             duration={2}
                             start={0.0}
                             end={1.7}
                             suffix=" Billion"
                             enableScrollSpy
                             scrollSpyOnce>
                        {({countUpRef, start}) => (
                            <SCountStreams ref={countUpRef}/>
                        )}
                    </CountUp>
                    <SStreamsTitle>Streams</SStreamsTitle>
                </SGlobalItem>
                <SGlobalItem>
                    <SGlobalImg src={revergeSvg}/>
                    <CountUp start={0}
                             delay={1.5}
                             end={839}
                             prefix={'$'}
                             suffix="m" enableScrollSpy
                             scrollSpyDelay={1500}
                             scrollSpyOnce>
                        {({countUpRef, start}) => (
                            <SCountStreams ref={countUpRef}/>
                        )}
                    </CountUp>
                    <SStreamsTitle>Revenue</SStreamsTitle>
                </SGlobalItem>
                <SGlobalItem>
                    <SGlobalImg src={market}/>
                    <CountUp start={0}
                             delay={3}
                             end={13}
                             suffix="%" enableScrollSpy
                             scrollSpyDelay={3000}
                             scrollSpyOnce>
                        {({countUpRef, start}) => (
                            <SCountStreams ref={countUpRef}/>
                        )}
                    </CountUp>
                    <SStreamsTitle>Market share</SStreamsTitle>
                </SGlobalItem>
            </SGlobalItems>
        </>
    );
};