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
