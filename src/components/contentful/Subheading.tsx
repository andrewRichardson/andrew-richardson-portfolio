import componentFromContent from "../../utils/contentfulComponents";
import { Entry } from "contentful";
import useContentful from "../../hooks/useContentful";
import { BLOCKS } from "@contentful/rich-text-types";
import { getEntryKey } from "../../contexts/ContentfulContext";
// import IconLink from "../common/IconLink";

type SubheadingType = {
    title: string;
    text: any;
};

type SubheadingProps = {
    title: string;
};

const options: any = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (_: any, children: any) => children,
        // [BLOCKS.EMBEDDED_ENTRY]: (children: any) => (
        //     <IconLink href="" icon={<></>}>
        //         {children}
        //     </IconLink>
        // ),
    },
};

const Subheading = ({ title }: SubheadingProps) => {
    const { content } = useContentful();

    const entry: Entry<SubheadingType> | undefined = content.get(
        getEntryKey("subheader", title),
    );

    if (!entry) return null;

    return componentFromContent(entry.fields.text, options);
};

export default Subheading;
