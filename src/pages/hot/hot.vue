<template>
   
   <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image
        :src="bannerPic"
        mode="aspectFill"
      ></image>
    </view>

    <!-- 推荐选项 -->
    <view class="tabs">

      <text v-for="(item, index) in subTypes" :key="item.id" class="text" :class="{active: index === subNumber}" @tap="subNumber = index">{{ item.title }}</text>
      
    </view>

    <!-- 推荐列表 -->
    <scroll-view 
      v-for="(item, index) in subTypes"
      v-show="subNumber === index"
      :key="item.id" scroll-y 
      class="scroll-view" 
      @scrolltolower="onScrolltolo"
    >

      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
        >
          <image
            class="thumb"
            :src="goods.picture"
          ></image>
          <view class="name ellipsis">{{ goods.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{ item.finish ? '没有更多数据了~' : '正在加载中...' }}</view>
    </scroll-view>
  </view>

</template>

<script setup lang="ts">

import type { HotGoodsItem } from "@/types/hot";
import { getHotRecommendAPI } from '@/services/hot';
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

//uniapp获取页面参数
const query = defineProps<{
  type: string
}>();

const bannerPic = ref<string>();

const subTypes = ref<(HotGoodsItem & { finish?: boolean })[]>([]);

const subNumber = ref<number>(0);

const urlMap = [
    { type: '1', title: '特惠推荐', url: '/hot/preference' },
    { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
    { type: '3', title: '一站买全', url: '/hot/oneStop' },
    { type: '4', title: '新鲜好物', url: '/hot/new' },
]

const currUrlMap = urlMap.find((item) => item.type === query.type);

//设置页面标题
uni.setNavigationBarTitle({ title: currUrlMap!.title })

const getHotList = async () => {
  const result = await getHotRecommendAPI(currUrlMap!.url, {
    //环境变量，开发环境，修改初始页面方便测试
    page: import.meta.env.DEV ? 30 : 1,
    pageSize: 10
  });
  bannerPic.value = result.result.bannerPicture
  subTypes.value = result.result.subTypes;
}


const onScrolltolo = async () => {
    const currsubType = subTypes.value[subNumber.value];
    if (currsubType.goodsItems.page < currsubType.goodsItems.pages) {
        currsubType.goodsItems.page++
        
    } else {
        currsubType.finish = true;

        return uni.showToast({ icon: 'none', title: '没有更多数据了' });
    }
    
    const result = await getHotRecommendAPI(currUrlMap!.url, {
       subType: currsubType.id,
       page: currsubType.goodsItems.page,
       pageSize: currsubType.goodsItems.pageSize
    });
    
    const newsubType = result.result.subTypes[subNumber.value]
    
    //对象引用，此时currsubType指向的是subTypes.value[subNumber.value]，所以改变currsubType相应的subTypes.value[subNumber.value]也会改变
    currsubType.goodsItems.items.push(...newsubType.goodsItems.items)
}

onLoad(() => {
  getHotList();
})

</script>

<style scoped lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;

  image {
    width: 100%;
    height: 100%;
  }
}
.scroll-view {
  height: 675px;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;
  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
    box-sizing: border-box;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>