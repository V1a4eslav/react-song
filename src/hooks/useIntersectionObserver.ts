import {RefObject, useEffect} from "react";

type IntersectionObserverCallback = (entry: IntersectionObserverEntry) => void;

export const useIntersectionObserver = (
    ref: RefObject<Element>,
    callback: IntersectionObserverCallback,
    options: IntersectionObserverInit = {threshold: [0.5]},
    enable: boolean = true): void => {

    useEffect(() => {
        if (!enable) {
            return;
        }
        const observer = new IntersectionObserver(([entry]) => callback(entry), options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, callback, options,enable]);
};
