import componentFromContent from "../../utils/contentfulComponents";
import { Entry } from "contentful";
import useContentful from "../../hooks/useContentful";
import { getEntryKey } from "../../contexts/ContentfulContext";

type TitleType = {
    title: string;
    text: any;
};

type TitleProps = {
    title: string;
    options?: any;
};

const Title = ({ title, options }: TitleProps) => {
    const { content } = useContentful();

    const entry: Entry<TitleType> | undefined = content.get(
        getEntryKey("title", title),
    );

    if (!entry) return null;

    return componentFromContent(entry.fields.text, options);
};

export default Title;
