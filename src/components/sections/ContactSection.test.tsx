import { render, screen } from "@testing-library/react";
import ContactSection from "./ContactSection";
import { Entry } from "contentful";

const testData: Entry<any> = {
    metadata: {
        tags: [],
    },
    sys: {
        space: {
            sys: {
                type: "Link",
                linkType: "Space",
                id: "8c7ig3xp4slj",
            },
        },
        id: "6CC506DICEiAq5FWFlsL3E",
        type: "Entry",
        createdAt: "2023-08-08T22:01:47.132Z",
        updatedAt: "2023-08-08T22:01:47.132Z",
        environment: {
            sys: {
                id: "master",
                type: "Link",
                linkType: "Environment",
            },
        },
        revision: 1,
        contentType: {
            sys: {
                type: "Link",
                linkType: "ContentType",
                id: "description",
            },
        },
        locale: "en-US",
    },
    fields: {
        title: "How to Reach Me",
        text: {
            nodeType: "document",
            data: {},
            content: [
                {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                        {
                            nodeType: "text",
                            value: "I am always eager to discuss anything software or product!",
                            marks: [
                                {
                                    type: "bold",
                                },
                            ],
                            data: {},
                        },
                        {
                            nodeType: "text",
                            value: "  Please send any job inquiries to my email below. Feel free to ask any and all general questions as well!",
                            marks: [],
                            data: {},
                        },
                    ],
                },
                {
                    nodeType: "embedded-entry-block",
                    data: {
                        target: {
                            metadata: {
                                tags: [],
                            },
                            sys: {
                                space: {
                                    sys: {
                                        type: "Link",
                                        linkType: "Space",
                                        id: "8c7ig3xp4slj",
                                    },
                                },
                                id: "1up2TdSYzk9zgQTIti05Dk",
                                type: "Entry",
                                createdAt: "2023-08-08T21:58:54.726Z",
                                updatedAt: "2023-08-08T21:59:56.079Z",
                                environment: {
                                    sys: {
                                        id: "master",
                                        type: "Link",
                                        linkType: "Environment",
                                    },
                                },
                                revision: 2,
                                contentType: {
                                    sys: {
                                        type: "Link",
                                        linkType: "ContentType",
                                        id: "button",
                                    },
                                },
                                locale: "en-US",
                            },
                            fields: {
                                title: "Contact",
                                text: "Contact",
                                url: "mailto:andyandy698@gmail.com?subject=Contact - andrewrichardson.info",
                                width: "125px",
                            },
                        },
                    },
                    content: [],
                },
                {
                    nodeType: "paragraph",
                    data: {},
                    content: [
                        {
                            nodeType: "text",
                            value: "",
                            marks: [],
                            data: {},
                        },
                    ],
                },
            ],
        },
    },
};

jest.clearAllMocks();

jest.mock("../../hooks/useIntersection", () => ({
    ...jest.requireActual("../../hooks/useIntersection"),
    __esModule: true,
    default: () => false,
}));

jest.mock("../../hooks/useContentful", () => ({
    ...jest.requireActual("../../hooks/useContentful"),
    __esModule: true,
    default: () => ({
        content: new Map(
            Object.entries({ "description-How to Reach Me": testData }),
        ),
    }),
}));

test("renders ContactSection", () => {
    render(
        <div data-testid="contact">
            <ContactSection />
        </div>,
    );
    const contact = screen.getByTestId("contact");
    expect(contact).toBeInTheDocument();
});

jest.mock("../../hooks/useContentful", () => ({
    ...jest.requireActual("../../hooks/useContentful"),
    __esModule: true,
    default: () => ({ content: new Map() }),
}));

test("renders ContactSection with no description", () => {
    render(
        <div data-testid="contact">
            <ContactSection />
        </div>,
    );
    const contact = screen.getByTestId("contact");
    expect(contact).toBeInTheDocument();
});
