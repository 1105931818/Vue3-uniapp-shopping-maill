import { http } from '@/utils/http';
import type { PageParams } from '@/types/global';
import type { HotContItem } from '@/types/hot';

/**
 * 通用热门推荐类型
 * @param url 请求地址
 * @param data 请求参数
 */
export const getHotRecommendAPI = (url: string, data?: PageParams & { subType?: string }) => {
    return http<HotContItem>({
        method: 'GET',
        url,
        data
    })
}