<template>
    <view class="swiper">

        <swiper
            :autoplay="false"
            :circular="true"
            :interval="3000"
            @change="onChange"
        >

            <swiper-item>

                <navigator
                    url="/pages/index/index"
                    hover-class="none"
                    class="navigator"
                >
                    
                    <image
                        mode="aspectFill"
                        class="image"
                        src="https://marketplace.canva.cn/VL44c/MAE2O4VL44c/1/s2/canva-tea-with-fresh-orange-flowers-on-opened-book-on-tray-MAE2O4VL44c.jpg"
                    />

                </navigator>

            </swiper-item>

            <swiper-item>

                <navigator
                    url="/pages/index/index"
                    hover-class="none"
                    class="navigator"
                >
    
                    <image
                        mode="aspectFill"
                        class="image"
                        src="https://marketplace.canva.cn/wTFOQ/MADLEgwTFOQ/6/s2/canva-human-skin-conditioner-MADLEgwTFOQ.jpg"
                    />

                </navigator>

            </swiper-item>

            <swiper-item>

                <navigator
                    url="/pages/index/index"
                    hover-class="none"
                    class="navigator"
                >
    
                    <image
                        mode="aspectFill"
                        class="image"
                        src="https://marketplace.canva.cn/U2FLE/MADLFHU2FLE/4/s2/canva-snow-covered-mountains-wallpaper-MADLFHU2FLE.jpg"
                    />

                </navigator>

            </swiper-item>

            <swiper-item>

                <navigator
                    url="/pages/index/index"
                    hover-class="none"
                    class="navigator"
                >
    
                    <image
                        mode="aspectFill"
                        class="image"
                        src="https://marketplace.canva.cn/_HxAo/MADLEa_HxAo/6/s2/canva-people-rising-his-hand-in-the-middle-of-sunflower-field-MADLEa_HxAo.jpg"
                    />

                </navigator>

            </swiper-item>

            <swiper-item>

                <navigator
                    url="/pages/index/index"
                    hover-class="none"
                    class="navigator"
                >
    
                    <image
                        mode="aspectFill"
                        class="image"
                        src="https://marketplace.canva.cn/FSVDQ/MADVfoFSVDQ/4/s2/canva-brown-concrete-roofs-MADVfoFSVDQ.jpg"
                    />

                </navigator>

            </swiper-item>

        </swiper>

        <view class="indicator">
            <text v-for="(item, index) in 5" :key="item" class="dot" :class="{ active: index === activeIndex }"></text>
        </view>

    </view>
</template>

<script setup lang="ts">

import { ref } from "vue";

const activeIndex = ref<number>(0);

const onChange: UniHelper.SwiperOnChange = (e) => {
    //!非空断言，主观上排除了undefined的情况
    activeIndex.value = e.detail!.current;
}

</script>

<style scoped lang="scss">

.swiper {
    height: 200px;
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