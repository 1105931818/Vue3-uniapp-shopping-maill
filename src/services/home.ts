import { http } from "@/utils/http"
import type { BannerItem, BtnListItem, HotListItem, GuessListItem } from "@/types/home"
import type { PageResult, PageParams } from '@/types/global'

export const getHomeBannerAPI = (distributionSite = 1) => {
    return http<BannerItem[]>({
        method: "GET",
        url: "/home/banner",
        data: {
            distributionSite
        }
    })
}

export const getCategoryAPI = () => {
    return http<BtnListItem[]>({
        method: "GET",
        url: "/home/category/mutli"
    })
}

export const getHotAPI = () => {
    return http<HotListItem[]>({
        method: "GET",
        url: "/home/hot/mutli"
    })
}

export const getGuessListAPI = (data?: PageParams) => {
    return http<PageResult<GuessListItem>>({
        method: "GET",
        url: "/home/goods/guessLike",
        data
    })
}