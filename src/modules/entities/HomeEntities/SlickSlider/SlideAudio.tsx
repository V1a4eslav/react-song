import React, {useEffect, useMemo, useRef} from 'react';
import {useAppSelector} from "../../../../hooks/redux";

interface ISlideAudio {
    uri: string;
}


// export const SlideAudio = ({uri}: ISlideAudio) => {
//     const audioRef: HTMLAudioElement | null = document.querySelector(`audio[src="${uri}"]`);
//
//     const {songUri} = useAppSelector(state => state.player.currentSong);
//
//
//     useEffect(() => {
//         if (!audioRef) return;
//         if (uri === songUri) {
//             audioRef.play();
//         } else {
//             audioRef.pause();
//         }
//     }, [songUri]);
//
//
//     return (
//         <audio src={uri}>
//             <source src={uri} type="audio/m4a"/>
//         </audio>
//     );
// };


export const SlideAudio = ({uri}: ISlideAudio) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const {songUri} = useAppSelector(state => state.player.currentSong);

    useEffect(() => {
        if (!audioRef.current) return;
        if (uri===songUri) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [songUri]);


    return (
        <audio ref={audioRef} src={uri}>
            <source src={uri} type="audio/m4a" />
        </audio>
    );
};
