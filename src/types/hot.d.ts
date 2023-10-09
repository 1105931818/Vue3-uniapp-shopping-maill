import type { PageResult } from './global'

export type HotItem = {
    desc: string;
    id: string;
    name: string;
    orderNum: number;
    picture: string;
    price: string;
}

export type HotGoodsItem = {
   id: string;
   title: string;
   goodsItems: PageResult<HotItem>
}

export type HotContItem = {
    bannerPicture: string;
    id: string;
    subTypes: HotGoodsItem[];
    title: string;
}