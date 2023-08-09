import { Entry } from "contentful";
import useContentful from "../../hooks/useContentful";
import { getEntryKey } from "../../contexts/ContentfulContext";
import PlainButton from "../common/Button";

type ButtonType = {
    title: string;
    text: any;
    url: string;
    width?: string;
    height?: string;
};

type ButtonProps = {
    title: string;
};

const Button = ({ title }: ButtonProps) => {
    const { content } = useContentful();

    const entry: Entry<ButtonType> | undefined = content.get(
        getEntryKey("button", title),
    );

    if (!entry) return null;

    return (
        <PlainButton
            href={entry.fields.url}
            width={entry.fields.width}
            height={entry.fields.height}
        >
            {entry.fields.text}
        </PlainButton>
    );
};

export default Button;
