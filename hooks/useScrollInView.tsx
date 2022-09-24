import { useEffect, useRef } from 'react';

export const useScrollInView = (id: string) => {
    const containerRef = useRef<HTMLImageElement>(null);
    const scrollY = useRef<number>(0);

    useEffect(() => {
        const element = document.getElementById(id);

        if (element) {
            const onScroll = () => {
                const elementHeight = element.offsetTop + element.offsetHeight;

                if (
                    window.scrollY > element.offsetTop - 400 &&
                    window.scrollY < elementHeight - 400 &&
                    scrollY.current < window.scrollY
                ) {
                    containerRef.current.scrollBy(5, 0);
                }

                scrollY.current = window.scrollY;
            };

            window.addEventListener('scroll', onScroll);

            return () => window.removeEventListener('scroll', onScroll);
        }
    }, [id, containerRef.current]);

    return [containerRef];
};
