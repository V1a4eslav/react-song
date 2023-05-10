import {SContainer} from 'modules/UIKit/SContainer';
import React from 'react';
import {SSlickSlider, SSlickWrapper} from "./SSlickSlider";
import {Slide} from "./Slide";
import {NextBtn} from "./Switchers/NextBtn";
import {PrevBtn} from "./Switchers/PrevBtn";
import {useGetChartsQuery} from "../../../app/repository/ShazamApi/ShazamApi";

export const SlickSlider = () => {
    const settings = {
        nextArrow: <NextBtn/>,
        prevArrow: <PrevBtn/>,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const {data} = useGetChartsQuery();
    return (
        <SSlickWrapper>
            <SContainer>
                <SSlickSlider {...settings}>
                    {data && data.tracks.map(track => (
                        <Slide key={track.key} song={track}/>
                    ))}
                </SSlickSlider>
            </SContainer>
        </SSlickWrapper>
    );
};
