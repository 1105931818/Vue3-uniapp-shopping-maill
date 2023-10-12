<template>
    <view class="swiper" :style="{height: height}">

        <swiper
            :autoplay="true"
            :circular="true"
            :interval="3000"
            @change="onChange"
        >

            <swiper-item v-for="(item, index) in list" :key="index">

                <navigator
                    url="/pages/index/index"
                    hover-class="none"
                    class="navigator"
                >
                    
                    <image
                        mode="aspectFill"
                        class="image"
                        :src="item.imgUrl"
                    />

                </navigator>

            </swiper-item>

        </swiper>

        <view class="indicator">
            <text v-for="(item, index) in list.length" :key="item" class="dot" :class="{ active: index === activeIndex }"></text>
        </view>

    </view>
</template>

<script setup lang="ts">
import type { BannerItem } from "@/types/home";
import { ref } from "vue";

const activeIndex = ref<number>(0);

const onChange: UniHelper.SwiperOnChange = (e) => {
    //!非空断言，主观上排除了undefined的情况
    activeIndex.value = e.detail!.current;
}

defineProps<{
    list: BannerItem[],
    height: string
}>()

</script>

<style scoped lang="scss">

.swiper {
    width: 100%;
    overflow: hidden;
    position: relative;
    transform: translateY(0);
    background-color: #efefef;

    .indicator {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 16rpx;
        display: flex;
        justify-content: center;
        align-items: center;

        .dot {
            width: 30rpx;
            height: 6rpx;
            margin: 0 8rpx;
            border-radius: 6rpx;
            background-color: rgba(255, 255, 255, 0.4);
        }

        .active {
            background-color: #fff;
        }
     }

     swiper,
     .navigator,
     .image {
        width: 100%;
        height: 100%;
     }
}

</style>