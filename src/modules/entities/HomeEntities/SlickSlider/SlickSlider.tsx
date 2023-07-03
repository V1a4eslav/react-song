import React from 'react';
import {SContainer} from 'modules/UIKit/SContainer';
import {SSlickSlider, SSlickWrapper} from "./SSlickSlider";
import {Slide} from "./Slide";
import {NextBtn} from "./Switchers/NextBtn";
import {PrevBtn} from "./Switchers/PrevBtn";
import {useGetChartsQuery} from "../../../../app/repository/ShazamApi/ShazamApi";
import {Settings} from "react-slick";
import {useActions} from "../../../../hooks/actions";

export const SlickSlider = () => {

    const {setCurrentSlide} = useActions();

    const settings: Settings = {
        nextArrow: <NextBtn/>,
        prevArrow: <PrevBtn/>,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange(currentSlide: number,nextSlide:number) {
            setCurrentSlide(nextSlide)
        }
    };

    const {data} = useGetChartsQuery();

    return (
        <SSlickWrapper>
            <SContainer>
                <SSlickSlider {...settings}>
                    {data && data.tracks.map((track, index) => (
                        <Slide key={track.key}
                               song={track}/>
                    ))}
                </SSlickSlider>
            </SContainer>
        </SSlickWrapper>
    );
};
