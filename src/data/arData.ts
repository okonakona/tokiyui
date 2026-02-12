export type ARItem = {
    id: string;
    category: "people" | "poem";
    frameImage: string;
    title: string;
};

export const AR_DATA: ARItem[] = [
    {
        id: "people_01",
        category: "people",
        frameImage: "/frames/people_01.png",
        title: "織田信長",
    },
    {
        id: "people_02",
        category: "people",
        frameImage: "/frames/people_02.png",
        title: "豊臣秀吉",
    },
    {
        id: "poem_01",
        category: "poem",
        frameImage: "/frames/poem_01.png",
        title: "百人一首01",
    },
    {
        id: "poem_02",
        category: "poem",
        frameImage: "/frames/poem_02.png",
        title: "百人一首02",
    },
];
