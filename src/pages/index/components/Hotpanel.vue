<template>
    <view class="panel hot">
        <view class="item" v-for="(item, index) in list" :key="index">
        
            <view class="title">

                <text class="title-text">{{ item.title }}</text>
                <text class="title-desc">{{ item.alt }}</text>

            </view>
            <navigator
                :url="`/pages/hot/hot?type=${item.type}`"
                hover-class="none"
                class="cards"
            >
                
                <image
                    :src="item.pictures[0]"
                    mode="scaleToFill"
                    class="image"
                />

                <image
                    :src="item.pictures[1]"
                    mode="scaleToFill"
                    class="image"
                />

            </navigator>

        </view>
    </view> 
</template>

<script setup lang="ts">
import type { HotListItem } from '@/types/home'

defineProps<{
    list: HotListItem[]
}>()

</script>

<style scoped lang="scss">

.hot {
    display: flex;
    flex-wrap: wrap;
    min-height: 508rpx;
    margin: 20rpx 20rpx 0;
    border-radius: 10rpx;
    background-color: #ffffff;

    .title {
        display: flex;
        align-items: center;
        padding: 24rpx 24rpx 0;
        font-size: 32rpx;
        color: #262626;
        position: relative;
        

        .title-desc {
            width: 50%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 24rpx;
            color: #7f7f7f;
            margin-left: 18rpx;
        }
    }

    .item {
        display: flex;
        flex-direction: column;
        width: 49%;
        height: 254rpx;
        border-right: 1px solid #eee;
        border-top: 1px solid #eee;

        .title {
            justify-content: start;
        }

        &:nth-child(2n) {
            border-right: 0px none;
        }

        &:nth-child(-n + 2) {
            border-top: 0px none;
        }

        .image {
            width: 150rpx;
            height: 150rpx;
        }
    }

    .cards {
        flex: 1;
        padding: 15rpx 20rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

</style>