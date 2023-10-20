import type { custGuessInstance } from '@/types/components'
import { ref } from 'vue'

//猜你喜欢组件封装组合式函数
export const useGuessList = () => {
    //获取猜你喜欢的组件实例
    const guess = ref<custGuessInstance>();

    //滚动触底事件
    const scrollList = () => {
        guess.value?.getMore();
     }

    return {
        guess,
        scrollList
    }
}