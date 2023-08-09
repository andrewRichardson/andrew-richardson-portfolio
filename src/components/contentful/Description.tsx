import componentFromContent from "../../utils/contentfulComponents";
import { Entry } from "contentful";
import useContentful from '../../hooks/useContentful';
import { getEntryKey } from '../../contexts/ContentfulContext';
import { BLOCKS } from '@contentful/rich-text-types';
import { SectionDescription } from "../common/section";

type DescriptionType = {
    title: string;
    text: any;
}

type DescriptionProps = {
    title: string;
}

const options: any = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (_: any, children: any) => <SectionDescription>{children}</SectionDescription>,
    },
};

const Description = ({title}: DescriptionProps) => {
    const { content } = useContentful();

    const entry: Entry<DescriptionType> | undefined = content.get(getEntryKey('description', title));

    if (!entry) return null;

    return componentFromContent(entry.fields.text, options);
}

export default Description;