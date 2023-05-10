import React, {FC, useState} from 'react';
import {
    SSlideArtistName,
    SSlideButtonPlay,
    SSlideButtons, SSlideContainer,
    SSlideGenre,
    SSlideTypeSong
} from "./SSlickSlider";
import {MainButton} from "../../UIKit/Buttons/MainButton/MainButton";
import {SSignInBtn} from "../../UIKit/Buttons/SignInBtn/SSignInBtn";
import {Track} from "../../../app/repository/ShazamApi/models";
import {SlideAudio} from "./SlideAudio";

export const Slide: FC<{ song: Track }> = ({song}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const uri: string | undefined = song.hub.actions?.[1].uri;

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <SSlideContainer>
            {uri && <SlideAudio uri={uri}
                                isPlaying={isPlaying}
                                setIsPlaying={setIsPlaying}
            />}
            <SSlideGenre>#{song.type}</SSlideGenre>
            <SSlideArtistName>{song.subtitle}</SSlideArtistName>
            <SSlideTypeSong>{song.title}</SSlideTypeSong>
            <SSlideButtonPlay onClick={handlePlayPause}
                              className={isPlaying ? 'play' : 'pause'}>
                <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M23 0C10.4367 0 0.25 10.1867 0.25 22.75C0.25 35.3133 10.4367 45.5 23 45.5C35.5633 45.5 45.75 35.3133 45.75 22.75C45.75 10.1867 35.5633 0 23 0ZM30.3176 23.1004L19.227 31.1695C19.1662 31.2132 19.0945 31.2393 19.0198 31.2449C18.9452 31.2505 18.8704 31.2354 18.8037 31.2013C18.7371 31.1672 18.6811 31.1154 18.642 31.0516C18.6029 30.9877 18.5822 30.9143 18.582 30.8395V14.7113C18.5818 14.6363 18.6023 14.5627 18.6414 14.4986C18.6804 14.4345 18.7364 14.3825 18.8032 14.3484C18.87 14.3142 18.9449 14.2992 19.0197 14.305C19.0945 14.3108 19.1662 14.3372 19.227 14.3813L30.3176 22.4453C30.37 22.4824 30.4127 22.5315 30.4422 22.5884C30.4717 22.6454 30.4871 22.7087 30.4871 22.7729C30.4871 22.837 30.4717 22.9003 30.4422 22.9573C30.4127 23.0142 30.37 23.0633 30.3176 23.1004Z"
                        fill="white" stroke="#96A4A4"/>
                </svg>
            </SSlideButtonPlay>
            <SSlideButtons>
                <MainButton color={'#55287d'}
                            padding={'26px 30px'}
                            bgColor={'#fff'}
                            br={'5px'}>Create Project
                </MainButton>
                <SSignInBtn to={'#'}>Sign In</SSignInBtn>
            </SSlideButtons>
        </SSlideContainer>
    );
};
