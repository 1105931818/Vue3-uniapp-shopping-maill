<template>
    <view class="caption">
        <text class="text">猜你喜欢</text>
    </view>

    <view class="guess">
        <navigator
            :url="`/pages/goods/goods?id=${item.id}`"
            hover-class="navigator-hover"
            class="guess_item"
            v-for="(item, index) in contList"
            :key="index"
        >
            <image
                :src="item.picture"
                mode="scaleToFill"
                class="image"
            />

            <view class="name">{{ item.name }}</view>

            <view class="price">
                <text class="small">¥</text>
                <text>{{ item.price }}</text>
            </view>

        </navigator>
    </view>

    <view class="loading-text">{{ finish ? '已经到底了！' : '正在加载中...' }}</view>
</template>

<script setup lang="ts">
import { getGuessListAPI } from '@/services/home';
import type { GuessListItem } from "@/types/home";
import type { PageParams } from "@/types/global";
import { onMounted, ref } from "vue";

const pageParams: Required<PageParams> = {
    page: 1,
    pageSize: 10,
}

const contList = ref<GuessListItem[]>([]);

const finish = ref<boolean>(false);

const getList = async () => {
    if (finish.value) {
        return uni.showToast({
            title: '已经到底了～',
            icon: 'none',
        })
    }
    const result = await getGuessListAPI(pageParams);
    contList.value.push(...result.result.items);
    if (pageParams.page < result.result.pages) {
        pageParams.page++;
    } else {
        finish.value = true;
    }
}

const resetData = () => {
    pageParams.page = 1;
    contList.value = [];
    finish.value = false;
}

onMounted(() => {
    getList();
})

//暴露方法
defineExpose({
    getMore: getList,
    resetData
})
</script>

<style scoped lang="scss">

.caption {
    display: flex;
    justify-content: center;
    line-height: 1;
    padding: 36rpx 0 40rpx;
    font-size: 32rpx;
    color: #262626;

    .text {
        display: flex;
        justify-content: center;
        align-items: center; 
        padding: 0 28rpx 0 30rpx;

        &::after,
        &::before {
            content: '';
            width: 20rpx;
            height: 20rpx;
            background-color: #27ba9b;
            background-size: contain;
            border-radius: 10rpx;
            margin: 0 10rpx;
        }
    }
}



.guess {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20rpx;

    .guess_item {
        width: 345rpx;
        padding: 24rpx 20rpx 20rpx;
        margin-bottom: 20rpx;
        border-radius: 10rpx;
        overflow: hidden;
        background-color: #fff;
        box-sizing: border-box;
    }

    .image {
        width: 304rpx;
        height: 260rpx;
    }

    .name {
        height: 75rpx;
        margin: 10rpx 0;
        font-size: 26rpx;
        color: #262626;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .price {
        line-height: 1;
        padding-top: 4rpx;
        color: #cf4444;
        font-size: 26rpx;
    }

    .small {
        font-size: 80%;
    }
}

.loading-text {
    text-align: center;
    font-size: 28rpx;
    color: #666;
    padding: 20rpx 0;
}

</style>