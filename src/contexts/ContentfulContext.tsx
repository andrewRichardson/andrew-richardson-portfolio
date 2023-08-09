import { createClient, Entry } from "contentful";
import { ReactNode, createContext, useEffect, useState } from "react";

const contentfulClientConfig = {
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID ?? "",
    environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT ?? "master",
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN ?? "",
};

export const getEntryKey = (type: string, title: string) => `${type}-${title}`;

type ContentfulContextType = {
    content: Map<string, Entry<any>>;
}

const defaultContentfulContext: ContentfulContextType = {
    content: new Map()
}

export const ContentfulContext = createContext<ContentfulContextType>(defaultContentfulContext);

type ContentfulProviderProps = {
    children: ReactNode;
}

const ContentfulProvider = ({children}: ContentfulProviderProps) => {
    const [content, setContent] = useState<Map<string, Entry<any>>>(new Map());
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            setIsLoading(true);

            const client = createClient(contentfulClientConfig);
            client
                .getEntries()
                .then((response) => {
                    console.log('hello')
                    const contentMap = new Map();
                    response.items.forEach((item: Entry<any>) => {
                        contentMap.set(getEntryKey(item.sys.contentType.sys.id, item.fields.title), item);
                    })
                    console.log(contentMap);
                    setContent(contentMap);
                })
                .catch(console.error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <ContentfulContext.Provider value={{ content }} >{children}</ContentfulContext.Provider>
}

export default ContentfulProvider;