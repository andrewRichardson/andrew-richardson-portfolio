// import { useState, useEffect } from "react";

const useIntersection = (element: any, rootMargin: any) => {
    return false;
    // const [isVisible, setState] = useState(false);

    // const current = element.current;

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setState(entry.isIntersecting);
    //         },
    //         { rootMargin }
    //     );

    //     current && observer.observe(current);

    //     return () => observer.unobserve(current);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // return isVisible;
};

export default useIntersection;
