import { ReactNode } from "react";

type NavigationItem = {
    label: string;
    link: string;
    icon: ReactNode;
    anchor?: boolean;
    highlight?: boolean;
};

export type NavigationList = NavigationItem[];

const OPEN_IN_NEW_TAB = {
    rel: "noopener noreferrer",
    target: "_blank",
};

export const getLinkProps = (isAnchor?: boolean) => {
    if (isAnchor) return {};
    return OPEN_IN_NEW_TAB;
};
