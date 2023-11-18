import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { Paper } from "../assets";
import Subheading from "./contentful/Subheading";
import * as useContentful from "../hooks/useContentful";

beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;

    window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: false,
        media: '',
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn()
      }));
});

it("renders Andrew Richardson", () => {
    render(
        <div>
            <App />
            <Subheading title="test" />
            <Paper />
        </div>,
    );
    const arElement = screen.getAllByText(/Andrew Richardson/i)?.[0];
    expect(arElement).toBeInTheDocument();
});

it("renders Andrew Richardson and catches scroll", () => {
    render(<App />);
    fireEvent.scroll(window, { top: 500 });
    const arElement = screen.getAllByText(/Andrew Richardson/i)?.[0];
    expect(arElement).toBeInTheDocument();
});

it("renders Andrew Richardson and catches scroll down", () => {
    render(<App />);
    const realDocument = document;
    Object.defineProperty(global, "document", {
        writable: true,
        value: {
            ...document,
            documentElement: {
                scrollTop: 500,
            },
            body: {
                scrollTop: 500,
            }
        },
    });
    fireEvent.scroll(window, { top: 500 });
    const arElement = screen.getAllByText(/Andrew Richardson/i)?.[0];
    expect(arElement).toBeInTheDocument();

    Object.defineProperty(global, "document", {
        writable: true,
        value: realDocument,
    });
});

it("renders Andrew Richardson and catches scroll back up", () => {
    render(<App />);
    const realDocument = document;
    Object.defineProperty(global, "document", {
        writable: true,
        value: {
            ...document,
            documentElement: {
                scrollTop: 500,
            },
            body: {
                scrollTop: 500,
            }
        },
    });
    fireEvent.scroll(window, { top: 500 });
    Object.defineProperty(global, "document", {
        writable: true,
        value: {
            ...document,
            documentElement: {
                scrollTop: -500,
            },
            body: {
                scrollTop: -500,
            }
        },
    });
    fireEvent.scroll(window, { top: -500 });
    const arElement = screen.getAllByText(/Andrew Richardson/i)?.[0];
    expect(arElement).toBeInTheDocument();

    Object.defineProperty(global, "document", {
        writable: true,
        value: realDocument,
    });
});

const mockContentful = new Map([
    [
        "title-How to Reach Me",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "3WVwWnKFwxUUfPHQQNo49e",
                "type": "Entry",
                "createdAt": "2023-08-08T21:56:19.372Z",
                "updatedAt": "2023-08-09T05:47:54.266Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 3,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "title"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "How to Reach Me",
                "text": {
                    "nodeType": "document",
                    "data": {},
                    "content": [
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "# How to Reach Me",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        }
                    ]
                }
            }
        }
    ],
    [
        "skills-Infra & Testing",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "7LmErifHLNKeDx74owcB8b",
                "type": "Entry",
                "createdAt": "2023-08-08T21:53:39.400Z",
                "updatedAt": "2023-08-09T05:47:06.735Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 2,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "skills"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "Infra & Testing",
                "skills": [
                    "GitHub Actions",
                    "Jest",
                    "Cypress",
                    "Webpack",
                    "Husky"
                ]
            }
        }
    ],
    [
        "experience-Asurion2",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "7I6uo2KFGl49IEuMK3BPj8",
                "type": "Entry",
                "createdAt": "2023-08-08T22:05:18.434Z",
                "updatedAt": "2023-08-09T05:45:41.564Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 3,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "experience"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "Asurion2",
                "index": 5,
                "company": "Asurion2",
                "id": "asurion2",
                "jobtitle": "Senior Software Engineer, Tech Lead",
                "bullets": "Lead a team of four engineers in Asurion's Digital Gateway space\n\nThe team owns all of Asurion's enterprise websites (asurion.com, phoneclaim.com, etc.) consisting of tens of thousands of pages and ~2 million monthly visitors\n\nTech stack includes React, Typescript, and Tailwind on the frontend in conjunction with NodeJS, Gatsby, GraphQL, and Contentful, as the content management layer, and several cutting-edge AWS technologies like CDK, CloudFront, and CloudFormation supporting the backend",
                "dates": "January 2023 - Present"
            }
        }
    ],
    [
        "experience-Tanium",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "1JGQtPTboncOvB4oBLOkEY",
                "type": "Entry",
                "createdAt": "2023-08-08T22:05:48.432Z",
                "updatedAt": "2023-08-09T05:45:38.873Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 3,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "experience"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "Tanium",
                "index": 4,
                "company": "Tanium",
                "id": "tanium",
                "jobtitle": "Software Engineer",
                "bullets": "Led a team to create customizable executive reports built with Typescript, React, Node.js, Webpack, and Go\n\nLed technical design process and created an MVP that was pitched to leadership\n\nSuccessfully oversaw product from initial development to production",
                "dates": "February - November 2022"
            }
        }
    ],
    [
        "experience-Asurion",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "4cu4LnsKA8Ub99SDSaW1ZB",
                "type": "Entry",
                "createdAt": "2023-08-08T22:07:06.086Z",
                "updatedAt": "2023-08-09T05:45:35.260Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 3,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "experience"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "Asurion",
                "index": 2,
                "company": "Asurion",
                "id": "asurion",
                "jobtitle": "Software Engineer",
                "bullets": "Helped establish a team of eight engineers to build a Wi-Fi diagnostic service\n\nIntroduced CI/CD and reusable code in a Lerna/Yarn monorepo to cut down duration of development cycle by up to 40%",
                "dates": "January 2020 - June 2021"
            }
        }
    ],
    [
        "experience-Postscript",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "7GseD9k0IKI2DI61qRDs41",
                "type": "Entry",
                "createdAt": "2023-08-08T22:06:39.627Z",
                "updatedAt": "2023-08-09T05:45:29.671Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 3,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "experience"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "Postscript",
                "index": 3,
                "company": "Postscript",
                "id": "postscript",
                "jobtitle": "Frontend Software Engineer",
                "bullets": "Worked with 4-person design team as to lead a revamp of the whole UI/UX of the web application\n\nPerformed user & market research with the design team\n\nManaged and led development from planning, to prototyping, to development, to QA, and to production",
                "dates": "June 2021 - February 2022"
            }
        }
    ],
    [
        "experience-Amazon",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "5YSEklSflk5fXKDJ1thTnv",
                "type": "Entry",
                "createdAt": "2023-08-08T22:07:39.090Z",
                "updatedAt": "2023-08-09T05:45:25.376Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 3,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "experience"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "Amazon",
                "index": 1,
                "company": "Amazon",
                "id": "amazon",
                "jobtitle": "Software Development Engineer Intern",
                "bullets": "Built an internal tool for the mobile homepage team to automate card submissions using Ruby on Rails, React, and AWS\n\nImproved the inter-team speed and quality of communication by automating a previously manual process",
                "dates": "May - August 2019"
            }
        }
    ],
    [
        "experience-Heal",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "7qf3M8TpAF3YdRRu6NKhjb",
                "type": "Entry",
                "createdAt": "2023-08-08T22:08:23.904Z",
                "updatedAt": "2023-08-09T05:45:22.455Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 3,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "experience"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "Heal",
                "index": 0,
                "company": "Healthware Consortium",
                "id": "heal",
                "jobtitle": "React Native Software Engineer",
                "bullets": "Converted an Objective-C and Swift based iOS app into a cross-platform React Native application\n\nRewrote controller layer to be compatible with the API layer built with Enterprise Java and the SQL database",
                "dates": "May 2018 - May 2019"
            }
        }
    ],
    [
        "description-Main Description",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "1CFOLqOlSeHvdMD9FVrSBf",
                "type": "Entry",
                "createdAt": "2023-08-08T21:42:27.830Z",
                "updatedAt": "2023-08-09T05:06:50.402Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 2,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "description"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "Main Description",
                "text": {
                    "nodeType": "document",
                    "data": {},
                    "content": [
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "I build robust, engaging products and aspire to encourage my peers.  Currently, I am a Senior Software Engineer & Tech Lead at ",
                                    "marks": [],
                                    "data": {}
                                },
                                {
                                    "nodeType": "hyperlink",
                                    "data": {
                                        "uri": "https://www.asurion.com/"
                                    },
                                    "content": [
                                        {
                                            "nodeType": "text",
                                            "value": "Asurion",
                                            "marks": [],
                                            "data": {}
                                        }
                                    ]
                                },
                                {
                                    "nodeType": "text",
                                    "value": ".",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        }
                    ]
                }
            }
        }
    ],
    [
        "title-About Me",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "34zwOz5bX2QouHBR3EaRnU",
                "type": "Entry",
                "createdAt": "2023-08-08T21:51:51.066Z",
                "updatedAt": "2023-08-09T03:12:30.440Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 2,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "title"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "About Me",
                "text": {
                    "data": {},
                    "content": [
                        {
                            "data": {},
                            "content": [
                                {
                                    "data": {},
                                    "marks": [],
                                    "value": "# About me",
                                    "nodeType": "text"
                                }
                            ],
                            "nodeType": "paragraph"
                        }
                    ],
                    "nodeType": "document"
                }
            }
        }
    ],
    [
        "subheader-About Me",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "34zwOz5bX2QouHBR3EaRn9",
                "type": "Entry",
                "createdAt": "2023-08-08T21:51:51.066Z",
                "updatedAt": "2023-08-09T03:12:30.440Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 2,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "subheader"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "About Me",
                "text": {
                    "data": {},
                    "content": [
                        {
                            "data": {},
                            "content": [
                                {
                                    "data": {},
                                    "marks": [],
                                    "value": "# About me",
                                    "nodeType": "text"
                                }
                            ],
                            "nodeType": "paragraph"
                        }
                    ],
                    "nodeType": "document"
                }
            }
        }
    ],
    [
        "title-Experience",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "BvkXDsbLOmI0ELNRUxwq6",
                "type": "Entry",
                "createdAt": "2023-08-08T22:03:26.619Z",
                "updatedAt": "2023-08-08T22:03:30.156Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 2,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "title"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "Experience",
                "text": {
                    "nodeType": "document",
                    "data": {},
                    "content": [
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "# Experience",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        }
                    ]
                }
            }
        }
    ],
    [
        "description-How to Reach Me",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "6CC506DICEiAq5FWFlsL3E",
                "type": "Entry",
                "createdAt": "2023-08-08T22:01:47.132Z",
                "updatedAt": "2023-08-08T22:01:47.132Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 1,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "description"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "How to Reach Me",
                "text": {
                    "nodeType": "document",
                    "data": {},
                    "content": [
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "I am always eager to discuss anything software or product!",
                                    "marks": [
                                        {
                                            "type": "bold"
                                        }
                                    ],
                                    "data": {}
                                },
                                {
                                    "nodeType": "text",
                                    "value": "  Please send any job inquiries to my email below. Feel free to ask any and all general questions as well!",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "embedded-entry-block",
                            "data": {
                                "target": {
                                    "metadata": {
                                        "tags": []
                                    },
                                    "sys": {
                                        "space": {
                                            "sys": {
                                                "type": "Link",
                                                "linkType": "Space",
                                                "id": "8c7ig3xp4slj"
                                            }
                                        },
                                        "id": "1up2TdSYzk9zgQTIti05Dk",
                                        "type": "Entry",
                                        "createdAt": "2023-08-08T21:58:54.726Z",
                                        "updatedAt": "2023-08-08T21:59:56.079Z",
                                        "environment": {
                                            "sys": {
                                                "id": "master",
                                                "type": "Link",
                                                "linkType": "Environment"
                                            }
                                        },
                                        "revision": 2,
                                        "contentType": {
                                            "sys": {
                                                "type": "Link",
                                                "linkType": "ContentType",
                                                "id": "button"
                                            }
                                        },
                                        "locale": "en-US"
                                    },
                                    "fields": {
                                        "title": "Contact",
                                        "text": "Contact",
                                        "url": "mailto:andyandy698@gmail.com?subject=Contact - andrewrichardson.info",
                                        "width": "125px"
                                    }
                                }
                            },
                            "content": []
                        },
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        }
                    ]
                }
            }
        }
    ],
    [
        "button-Contact",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "1up2TdSYzk9zgQTIti05Dk",
                "type": "Entry",
                "createdAt": "2023-08-08T21:58:54.726Z",
                "updatedAt": "2023-08-08T21:59:56.079Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 2,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "button"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "Contact",
                "text": "Contact",
                "url": "mailto:andyandy698@gmail.com?subject=Contact - andrewrichardson.info",
                "width": "125px"
            }
        }
    ],
    [
        "skills-Design",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "1bZxjQNbxLxw6mVKagk8AU",
                "type": "Entry",
                "createdAt": "2023-08-08T21:53:19.905Z",
                "updatedAt": "2023-08-08T21:53:19.905Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 1,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "skills"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "Design",
                "skills": [
                    "Storybook",
                    "Figma",
                    "Photoshop"
                ]
            }
        }
    ],
    [
        "skills-Languages & Libraries",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "5DI1WmvgfkiRMOlExgUsc7",
                "type": "Entry",
                "createdAt": "2023-08-08T21:53:04.010Z",
                "updatedAt": "2023-08-08T21:53:04.010Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 1,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "skills"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "Languages & Libraries",
                "skills": [
                    "React",
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "CSS",
                    "Node.js"
                ]
            }
        }
    ],
    [
        "description-About Me",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "70RVDERYnsUAmY7AsQX9Or",
                "type": "Entry",
                "createdAt": "2023-08-08T21:51:22.289Z",
                "updatedAt": "2023-08-08T21:51:22.289Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 1,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "description"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "About Me",
                "text": {
                    "nodeType": "document",
                    "data": {},
                    "content": [
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "I am a product, leadership, and customer focused Software Engineer with a passion for making things.",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "I have four total years of experience as an engineer; I have three years experience working on Frontend/Full Stack development with an additional years experience working on Mobile App development.",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "Recently, the technologies and frameworks I have been using the most are:",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        }
                    ]
                }
            }
        }
    ],
    [
        "subheader-Main Subheader",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "3vHyeqmjjzXKNh2d0L8Sjm",
                "type": "Entry",
                "createdAt": "2023-02-28T15:24:08.477Z",
                "updatedAt": "2023-08-08T21:47:51.711Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 3,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "subheader"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "Main Subheader",
                "text": {
                    "nodeType": "document",
                    "data": {},
                    "content": [
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "Software engineer; ",
                                    "marks": [
                                        {
                                            "type": "bold"
                                        }
                                    ],
                                    "data": {}
                                },
                                {
                                    "nodeType": "embedded-entry-inline",
                                    "data": {
                                        "target": {
                                            "metadata": {
                                                "tags": []
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8c7ig3xp4slj"
                                                    }
                                                },
                                                "id": "6jJqMAoRevHcb9ZpDRsHTC",
                                                "type": "Entry",
                                                "createdAt": "2023-08-08T21:46:38.691Z",
                                                "updatedAt": "2023-08-08T21:46:38.691Z",
                                                "environment": {
                                                    "sys": {
                                                        "id": "master",
                                                        "type": "Link",
                                                        "linkType": "Environment"
                                                    }
                                                },
                                                "revision": 1,
                                                "contentType": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "ContentType",
                                                        "id": "iconLink"
                                                    }
                                                },
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "title": "React",
                                                "linkText": "React",
                                                "url": "https://reactjs.org/",
                                                "icon": {
                                                    "metadata": {
                                                        "tags": []
                                                    },
                                                    "sys": {
                                                        "space": {
                                                            "sys": {
                                                                "type": "Link",
                                                                "linkType": "Space",
                                                                "id": "8c7ig3xp4slj"
                                                            }
                                                        },
                                                        "id": "2X3jsJhCNVnuVKVfeIsYsy",
                                                        "type": "Asset",
                                                        "createdAt": "2023-08-08T21:39:43.177Z",
                                                        "updatedAt": "2023-08-09T05:17:21.126Z",
                                                        "environment": {
                                                            "sys": {
                                                                "id": "master",
                                                                "type": "Link",
                                                                "linkType": "Environment"
                                                            }
                                                        },
                                                        "revision": 2,
                                                        "locale": "en-US"
                                                    },
                                                    "fields": {
                                                        "title": "React Logo",
                                                        "description": "",
                                                        "file": {
                                                            "url": "//images.ctfassets.net/8c7ig3xp4slj/2X3jsJhCNVnuVKVfeIsYsy/f1ed7fba90d634c3ca514a5a3edcb126/React-icon.svg.png",
                                                            "details": {
                                                                "size": 1119,
                                                                "image": {
                                                                    "width": 40,
                                                                    "height": 35
                                                                }
                                                            },
                                                            "fileName": "React-icon.svg.png",
                                                            "contentType": "image/png"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "content": []
                                },
                                {
                                    "nodeType": "text",
                                    "value": " and ",
                                    "marks": [
                                        {
                                            "type": "bold"
                                        }
                                    ],
                                    "data": {}
                                },
                                {
                                    "nodeType": "embedded-entry-inline",
                                    "data": {
                                        "target": {
                                            "metadata": {
                                                "tags": []
                                            },
                                            "sys": {
                                                "space": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "Space",
                                                        "id": "8c7ig3xp4slj"
                                                    }
                                                },
                                                "id": "5bEkguRthYENTy55k5vR2v",
                                                "type": "Entry",
                                                "createdAt": "2023-08-08T21:46:58.426Z",
                                                "updatedAt": "2023-08-08T21:46:58.426Z",
                                                "environment": {
                                                    "sys": {
                                                        "id": "master",
                                                        "type": "Link",
                                                        "linkType": "Environment"
                                                    }
                                                },
                                                "revision": 1,
                                                "contentType": {
                                                    "sys": {
                                                        "type": "Link",
                                                        "linkType": "ContentType",
                                                        "id": "iconLink"
                                                    }
                                                },
                                                "locale": "en-US"
                                            },
                                            "fields": {
                                                "title": "TypeScript",
                                                "linkText": "TypeScript",
                                                "url": "https://www.typescriptlang.org/",
                                                "icon": {
                                                    "metadata": {
                                                        "tags": []
                                                    },
                                                    "sys": {
                                                        "space": {
                                                            "sys": {
                                                                "type": "Link",
                                                                "linkType": "Space",
                                                                "id": "8c7ig3xp4slj"
                                                            }
                                                        },
                                                        "id": "1bKahoSEhoDYk5W7Z4tufF",
                                                        "type": "Asset",
                                                        "createdAt": "2023-08-08T21:41:49.829Z",
                                                        "updatedAt": "2023-08-09T05:17:38.418Z",
                                                        "environment": {
                                                            "sys": {
                                                                "id": "master",
                                                                "type": "Link",
                                                                "linkType": "Environment"
                                                            }
                                                        },
                                                        "revision": 2,
                                                        "locale": "en-US"
                                                    },
                                                    "fields": {
                                                        "title": "Typescript Logo",
                                                        "description": "",
                                                        "file": {
                                                            "url": "//images.ctfassets.net/8c7ig3xp4slj/1bKahoSEhoDYk5W7Z4tufF/7d5df402710d30a7f198a85956514969/Typescript.svg.png",
                                                            "details": {
                                                                "size": 622,
                                                                "image": {
                                                                    "width": 35,
                                                                    "height": 35
                                                                }
                                                            },
                                                            "fileName": "Typescript.svg.png",
                                                            "contentType": "image/png"
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "content": []
                                },
                                {
                                    "nodeType": "text",
                                    "value": " connoisseur.",
                                    "marks": [
                                        {
                                            "type": "bold"
                                        }
                                    ],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        }
                    ]
                }
            }
        }
    ],
    [
        "iconLink-TypeScript",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "5bEkguRthYENTy55k5vR2v",
                "type": "Entry",
                "createdAt": "2023-08-08T21:46:58.426Z",
                "updatedAt": "2023-08-08T21:46:58.426Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 1,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "iconLink"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "TypeScript",
                "linkText": "TypeScript",
                "url": "https://www.typescriptlang.org/",
                "icon": {
                    "metadata": {
                        "tags": []
                    },
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8c7ig3xp4slj"
                            }
                        },
                        "id": "1bKahoSEhoDYk5W7Z4tufF",
                        "type": "Asset",
                        "createdAt": "2023-08-08T21:41:49.829Z",
                        "updatedAt": "2023-08-09T05:17:38.418Z",
                        "environment": {
                            "sys": {
                                "id": "master",
                                "type": "Link",
                                "linkType": "Environment"
                            }
                        },
                        "revision": 2,
                        "locale": "en-US"
                    },
                    "fields": {
                        "title": "Typescript Logo",
                        "description": "",
                        "file": {
                            "url": "//images.ctfassets.net/8c7ig3xp4slj/1bKahoSEhoDYk5W7Z4tufF/7d5df402710d30a7f198a85956514969/Typescript.svg.png",
                            "details": {
                                "size": 622,
                                "image": {
                                    "width": 35,
                                    "height": 35
                                }
                            },
                            "fileName": "Typescript.svg.png",
                            "contentType": "image/png"
                        }
                    }
                }
            }
        }
    ],
    [
        "iconLink-React",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "6jJqMAoRevHcb9ZpDRsHTC",
                "type": "Entry",
                "createdAt": "2023-08-08T21:46:38.691Z",
                "updatedAt": "2023-08-08T21:46:38.691Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 1,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "iconLink"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "React",
                "linkText": "React",
                "url": "https://reactjs.org/",
                "icon": {
                    "metadata": {
                        "tags": []
                    },
                    "sys": {
                        "space": {
                            "sys": {
                                "type": "Link",
                                "linkType": "Space",
                                "id": "8c7ig3xp4slj"
                            }
                        },
                        "id": "2X3jsJhCNVnuVKVfeIsYsy",
                        "type": "Asset",
                        "createdAt": "2023-08-08T21:39:43.177Z",
                        "updatedAt": "2023-08-09T05:17:21.126Z",
                        "environment": {
                            "sys": {
                                "id": "master",
                                "type": "Link",
                                "linkType": "Environment"
                            }
                        },
                        "revision": 2,
                        "locale": "en-US"
                    },
                    "fields": {
                        "title": "React Logo",
                        "description": "",
                        "file": {
                            "url": "//images.ctfassets.net/8c7ig3xp4slj/2X3jsJhCNVnuVKVfeIsYsy/f1ed7fba90d634c3ca514a5a3edcb126/React-icon.svg.png",
                            "details": {
                                "size": 1119,
                                "image": {
                                    "width": 40,
                                    "height": 35
                                }
                            },
                            "fileName": "React-icon.svg.png",
                            "contentType": "image/png"
                        }
                    }
                }
            }
        }
    ],
    [
        "title-Main Title",
        {
            "metadata": {
                "tags": []
            },
            "sys": {
                "space": {
                    "sys": {
                        "type": "Link",
                        "linkType": "Space",
                        "id": "8c7ig3xp4slj"
                    }
                },
                "id": "26SYlQEurrbhrgsZVORJ0u",
                "type": "Entry",
                "createdAt": "2023-08-08T21:38:26.130Z",
                "updatedAt": "2023-08-08T21:38:26.130Z",
                "environment": {
                    "sys": {
                        "id": "master",
                        "type": "Link",
                        "linkType": "Environment"
                    }
                },
                "revision": 1,
                "contentType": {
                    "sys": {
                        "type": "Link",
                        "linkType": "ContentType",
                        "id": "title"
                    }
                },
                "locale": "en-US"
            },
            "fields": {
                "title": "Main Title",
                "text": {
                    "nodeType": "document",
                    "data": {},
                    "content": [
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "Hi, I'm ",
                                    "marks": [
                                        {
                                            "type": "bold"
                                        }
                                    ],
                                    "data": {}
                                },
                                {
                                    "nodeType": "text",
                                    "value": "Andrew Richardson.",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        },
                        {
                            "nodeType": "paragraph",
                            "data": {},
                            "content": [
                                {
                                    "nodeType": "text",
                                    "value": "",
                                    "marks": [],
                                    "data": {}
                                }
                            ]
                        }
                    ]
                }
            }
        }
    ]
]);

it("renders Andrew Richardson with contentful data", () => {
    jest.spyOn(useContentful, "default").mockReturnValue({content: mockContentful as any});
    render(
        <div>
            <App />
            <Subheading title="About Me" />
            <Paper />
        </div>,
    );
    const arElement = screen.getAllByText(/Andrew Richardson/i)?.[0];
    expect(arElement).toBeInTheDocument();
});

it("renders Andrew Richardson with contentful data and clicks label", async () => {
    jest.spyOn(useContentful, "default").mockReturnValue({content: mockContentful as any});
    render(
        <div>
            <App />
            <Subheading title="About Me" />
            <Paper />
        </div>,
    );
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
        const asurion2 = screen.getByText('Asurion2');
        asurion2.click();
        await new Promise((r) => setTimeout(r, 100));
    })

    const arElement = screen.getAllByText(/Andrew Richardson/i)?.[0];
    expect(arElement).toBeInTheDocument();
});
