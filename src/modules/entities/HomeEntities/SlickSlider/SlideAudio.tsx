import React, {useEffect, useRef} from 'react';

interface ISlideAudio {
    uri: string,
    isPlaying: boolean,
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
}

export const SlideAudio = ({uri, isPlaying}: ISlideAudio) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audioElement = audioRef.current;
        if (audioElement) {
            if (isPlaying) {
                audioElement.play();
            } else {
                audioElement.pause();
            }
        }
    }, [isPlaying]);

    return (
        <audio ref={audioRef}
               src={uri}>
            <source src={uri} type='audio/mpeg'/>
        </audio>
    );
};
