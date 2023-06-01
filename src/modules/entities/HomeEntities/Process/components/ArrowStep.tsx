import React from 'react';

interface ISvg{
    className:string
}

export const ArrowStepSVG = (props:ISvg) => {
    return (
        <svg {...props} width="126" height="24" viewBox="0 0 126 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M115.515 1.39344L125.061 10.9394C125.646 11.5252 125.646 12.4749 125.061 13.0607L115.515 22.6066C114.929 23.1924 113.979 23.1924 113.393 22.6066C112.808 22.0209 112.808 21.0711 113.393 20.4853L120.379 13.5H0V10.5H120.379L113.393 3.51476C112.808 2.92898 112.808 1.97923 113.393 1.39344C113.979 0.807655 114.929 0.807655 115.515 1.39344Z" fill="#55287D"/>
        </svg>
    );
};
