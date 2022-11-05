import { useEffect } from "react";

export default function useOutsideAlerter(ref: any, callback: () => void) {
    useEffect(() => {
        function handleClickOutside(event: { target: any }) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
}
