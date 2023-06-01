import React from 'react';
import {SlickSlider} from "../entities/HomeEntities/SlickSlider/SlickSlider";
import {Sponsors} from "../entities/Sponsors/Sponsors";
import {ChartsElement} from "../entities/HomeEntities/Charts/ChartsElement";
import {HowItWork} from "../entities/HomeEntities/HowItWork/HowItWork";
import {Process} from "../entities/HomeEntities/Process/Process";
import {GlobalProjections} from "../entities/HomeEntities/GlobalProjections/GlobalProjections";


export const HomePage = () => {
    return (
        <>
            {/*<SlickSlider/>*/}
            {/*<Sponsors/>*/}
            <HowItWork/>
            <ChartsElement/>
            <Process/>
            <GlobalProjections/>
        </>
    );
};