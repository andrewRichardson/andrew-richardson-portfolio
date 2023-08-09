import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const baseOptions: any = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (_: any, children: any) => children,
    },
};

const componentFromContent = (document: any, options?: any) =>
    documentToReactComponents(document, options ?? baseOptions);

export default componentFromContent;
