// Used with permission from: https://usehooks-ts.com/react-hook/use-media-query

import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
    const getMatches = (query: string): boolean => {
        if (typeof window !== "undefined" && window.matchMedia) {
            return window.matchMedia(query).matches;
        }

        return false;
    };

    const [matches, setMatches] = useState<boolean>(getMatches(query));

    function handleChange() {
        setMatches(getMatches(query));
    }

    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) {
            return;
        }

        const matchMedia = window.matchMedia(query);

        // Triggered at the first client-side load and if query changes
        handleChange();

        // Listen matchMedia
        matchMedia.addEventListener("change", handleChange);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    return matches;
};

export default useMediaQuery;
