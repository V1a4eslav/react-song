import {SContainer} from 'modules/UIKit/SContainer';
import React from 'react';
import {SSponsorsBody} from "./StyledComponents";
import Amazon from 'assets/images/sponsors/amazon.png';
import Disney from 'assets/images/sponsors/Disney.png';
import Netflix from 'assets/images/sponsors/Netflix.png';
import TikTok from 'assets/images/sponsors/TikTok.png';
import YouTube from 'assets/images/sponsors/YouTube.png';
import Vevo from 'assets/images/sponsors/vevo.png';
import SonyMusic from 'assets/images/sponsors/sonymusic.png';
import Universal from 'assets/images/sponsors/universal.png';
import WB from 'assets/images/sponsors/wb.png';


export const Sponsors = () => {
    return (
        <SContainer>
            <SSponsorsBody>
                <img src={TikTok} alt="TikTok"/>
                <img src={Netflix} alt="Netflix"/>
                <img src={YouTube} alt="YouTube"/>
                <img src={Amazon} alt="Amazon"/>
                <img src={Vevo} alt="Vevo"/>
                <img src={Disney} alt="Disney"/>
                <img src={SonyMusic} alt="SonyMusic"/>
                <img src={Universal} alt="Universal"/>
                <img src={WB} alt="WB"/>
            </SSponsorsBody>
        </SContainer>
    );
};
