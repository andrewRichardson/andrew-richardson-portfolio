import { useEffect, useState } from "react";
import { createClient, Entry } from "contentful";

const contentfulClientConfig = {
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID ?? "",
    environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT ?? "master",
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN ?? "",
};

type ContentfulEntries = {
    content: Entry<unknown>[];
};

const useContentful = (contentTypeId?: string): ContentfulEntries => {
    const [content, setContent] = useState<Entry<unknown>[]>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!content && !isLoading) {
            setIsLoading(true);

            const client = createClient(contentfulClientConfig);
            client
                .getEntries({ content_type: contentTypeId })
                .then((response) => setContent(response.items))
                .catch(console.error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { content: content ?? [] };
};

export default useContentful;
