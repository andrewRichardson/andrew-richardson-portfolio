/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";

const useIntersection = (element: { current: any }, rootMargin: any) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            },
            { rootMargin }
        );

        element.current && observer.observe(element.current);

        return () => observer.unobserve(element.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return isVisible;
};

export default useIntersection;
