import { http } from "@/utils/http";
import type { CategoryTopItem } from "@/types/class";

export const getCategoryTopAPI = () => {
    return http<CategoryTopItem[]>({
        method: 'GET',
        url: '/category/top'
    })
}