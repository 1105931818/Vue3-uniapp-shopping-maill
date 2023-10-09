export type BannerItem = {
    hrefUrl: string;
    id: string;
    imgUrl: string;
    type: number;
}

export type BtnListItem = {
    icon: string;
    id: string;
    name: string;
}

export type HotListItem = {
    alt: string;
    id: string;
    pictures: string[];
    target: string;
    title: string;
    type: number;
}

export type GuessListItem = {
    id: string;
    desc: string;
    name: string;
    orderNum: number;
    picture: string;
    price: string;
}
