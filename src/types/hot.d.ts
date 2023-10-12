import type { PageResult, GoodsItem } from './global'

export type HotItem = GoodsItem

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