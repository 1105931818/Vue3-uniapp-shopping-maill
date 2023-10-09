import custSwiper from '@/components/cust-Swiper.vue'
import custGuess from '@/components/cust-Guess.vue'

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        custSwiper: typeof custSwiper;
        custGuess: typeof custGuess;
    }
}

//组件实例类型
export type custGuessInstance = InstanceType<typeof custGuess>