export type PageResult<T> = {
    counts: number;
    items: T[];
    page: number;
    pageSize: number;
    pages: number;
}

export type PageParams = {
    page?: number;
    pageSize?: number;
}

export type GoodsItem = {
    desc: string;
    id: string;
    name: string;
    orderNum: number;
    picture: string;
    price: string;
}