import { createClient, Entry } from "contentful";
import { ReactNode, createContext, useEffect, useState } from "react";

const contentfulClientConfig = {
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID ?? "",
    environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT ?? "",
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN ?? "",
};

export const mockEntry: Entry<any> = {
    sys: {
        id: "title",
        type: "title",
        createdAt: "test",
        locale: "en-US",
        updatedAt: "test",
        contentType: {
            sys: {
                type: "Link",
                linkType: "ContentType",
                id: "titlecontenttype",
            },
        },
    },
    fields: { text: "Andrew Richardson" },
    metadata: { tags: [] },
    toPlainObject: function (): object {
        throw new Error("Function not implemented.");
    },
    update: function (): Promise<Entry<any>> {
        throw new Error("Function not implemented.");
    },
};

export const getEntryKey = (type: string, title: string) => `${type}-${title}`;

export type ContentfulContextType = {
    content: Map<string, Entry<any>>;
};

export const defaultContentfulContext: ContentfulContextType = {
    content: new Map(Object.entries({ "title-Main Title": mockEntry })),
};

export const ContentfulContext = createContext<ContentfulContextType>(
    defaultContentfulContext,
);

type ContentfulProviderProps = {
    children: ReactNode;
};

const ContentfulProvider = ({ children }: ContentfulProviderProps) => {
    const [content, setContent] = useState<Map<string, Entry<any>>>(new Map());
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            setIsLoading(true);

            if (
                !contentfulClientConfig.space ||
                !contentfulClientConfig.environment ||
                !contentfulClientConfig.accessToken
            )
                return;

            const client = createClient(contentfulClientConfig);
            client
                .getEntries()
                .then((response) => {
                    const contentMap = new Map();
                    response.items.forEach((item: Entry<any>) => {
                        contentMap.set(
                            getEntryKey(
                                item.sys.contentType.sys.id,
                                item.fields.title,
                            ),
                            item,
                        );
                    });
                    setContent(contentMap);
                    console.log(contentMap);
                })
                .catch(console.error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ContentfulContext.Provider value={{ content }}>
            {children}
        </ContentfulContext.Provider>
    );
};

export default ContentfulProvider;
