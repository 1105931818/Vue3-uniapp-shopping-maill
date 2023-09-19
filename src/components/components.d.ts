import custSwiper from './cust-Swiper.vue'

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        custSwiper: typeof custSwiper
    }
}