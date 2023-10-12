<template name="skeleton">
    <view class="sk-container">
      <view class="viewport data-v-97f6f596">
        <view class="search data-v-97f6f596">
          <view class="input data-v-97f6f596">
            <text class="icon-search data-v-97f6f596 sk-transparent sk-text-14-2857-325 sk-text">女靴</text>
          </view>
        </view>
        <view class="categories data-v-97f6f596">
          <scroll-view :scroll-y="true" class="primary data-v-97f6f596">
            <view class="item data-v-97f6f596 active sk-pseudo sk-pseudo-circle">
              <text class="name data-v-97f6f596 sk-transparent sk-text-14-2857-725 sk-text">居家</text>
            </view>
            <view class="item data-v-97f6f596 sk-pseudo sk-pseudo-circle">
              <text class="name data-v-97f6f596 sk-transparent sk-text-14-2857-763 sk-text">美食</text>
            </view>
            <view class="item data-v-97f6f596 sk-pseudo sk-pseudo-circle">
              <text class="name data-v-97f6f596 sk-transparent sk-text-14-2857-533 sk-text">服饰</text>
            </view>
            <view class="item data-v-97f6f596 sk-pseudo sk-pseudo-circle">
              <text class="name data-v-97f6f596 sk-transparent sk-text-14-2857-477 sk-text">母婴</text>
            </view>
            <view class="item data-v-97f6f596 sk-pseudo sk-pseudo-circle">
              <text class="name data-v-97f6f596 sk-transparent sk-text-14-2857-723 sk-text">个护</text>
            </view>
            <view class="item data-v-97f6f596 sk-pseudo sk-pseudo-circle">
              <text class="name data-v-97f6f596 sk-transparent sk-text-14-2857-557 sk-text">严选</text>
            </view>
            <view class="item data-v-97f6f596 sk-pseudo sk-pseudo-circle">
              <text class="name data-v-97f6f596 sk-transparent sk-text-14-2857-243 sk-text">数码</text>
            </view>
            <view class="item data-v-97f6f596 sk-pseudo sk-pseudo-circle">
              <text class="name data-v-97f6f596 sk-transparent sk-text-14-2857-284 sk-text">运动</text>
            </view>
            <view class="item data-v-97f6f596 sk-pseudo sk-pseudo-circle">
              <text class="name data-v-97f6f596 sk-transparent sk-text-14-2857-444 sk-text">杂项</text>
            </view>
          </scroll-view>
          <scroll-view :scroll-y="true" class="secondary data-v-97f6f596">
            <view is="components/cust-Swiper" class="banner data-v-97f6f596">
              <view class="swiper Swiper--swiper data-v-9a32dec4 Swiper--data-v-9a32dec4" style="height:160px">
                <swiper :autoplay="false" :circular="true" class="data-v-9a32dec4 Swiper--data-v-9a32dec4" :interval="3000" :current="0">
                  <swiper-item class="data-v-9a32dec4 Swiper--data-v-9a32dec4" style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                    <navigator class="navigator Swiper--navigator data-v-9a32dec4 Swiper--data-v-9a32dec4" hover-class="none">
                      <image class="image Swiper--image data-v-9a32dec4 Swiper--data-v-9a32dec4 sk-image" mode="aspectFill"></image>
                    </navigator>
                  </swiper-item>
                </swiper>
                <view class="indicator Swiper--indicator data-v-9a32dec4 Swiper--data-v-9a32dec4">
                  <text class="dot Swiper--dot data-v-9a32dec4 Swiper--data-v-9a32dec4 active Swiper--active"></text>
                  <text class="dot Swiper--dot data-v-9a32dec4 Swiper--data-v-9a32dec4"></text>
                  <text class="dot Swiper--dot data-v-9a32dec4 Swiper--data-v-9a32dec4"></text>
                  <text class="dot Swiper--dot data-v-9a32dec4 Swiper--data-v-9a32dec4"></text>
                  <text class="dot Swiper--dot data-v-9a32dec4 Swiper--data-v-9a32dec4"></text>
                </view>
              </view>
            </view>
            <view class="panel data-v-97f6f596">
              <view class="title data-v-97f6f596">
                <text class="name data-v-97f6f596 sk-transparent sk-text-26-4706-311 sk-text">居家生活用品</text>
                <navigator class="more data-v-97f6f596 sk-transparent sk-text-30-8824-466 sk-text sk-pseudo sk-pseudo-circle" hover-class="none">全部 &gt;</navigator>
              </view>
              <view class="section data-v-97f6f596">
                <navigator class="goods data-v-97f6f596" hover-class="none">
                  <image class="image data-v-97f6f596 sk-image"></image>
                  <view class="name ellipsis data-v-97f6f596 sk-transparent sk-text-14-2857-941 sk-text">法国年份雅文邑700毫升</view>
                  <view class="price data-v-97f6f596">
                    <text class="symbol data-v-97f6f596 sk-transparent sk-opacity">¥</text>
                    <text class="number data-v-97f6f596 sk-transparent sk-text-14-2857-877 sk-text">1480.00</text>
                  </view>
                </navigator>
                <navigator class="goods data-v-97f6f596" hover-class="none">
                  <image class="image data-v-97f6f596 sk-image"></image>
                  <view class="name ellipsis data-v-97f6f596 sk-transparent sk-text-14-2857-324 sk-text">梅乃宿梅酒720毫升</view>
                  <view class="price data-v-97f6f596">
                    <text class="symbol data-v-97f6f596 sk-transparent sk-opacity">¥</text>
                    <text class="number data-v-97f6f596 sk-transparent sk-text-14-2857-995 sk-text">168.00</text>
                  </view>
                </navigator>
                <navigator class="goods data-v-97f6f596" hover-class="none">
                  <image class="image data-v-97f6f596 sk-image"></image>
                  <view class="name ellipsis data-v-97f6f596 sk-transparent sk-text-14-2857-968 sk-text">多米尼加陈年朗姆酒700毫升</view>
                  <view class="price data-v-97f6f596">
                    <text class="symbol data-v-97f6f596 sk-transparent sk-opacity">¥</text>
                    <text class="number data-v-97f6f596 sk-transparent sk-text-14-2857-456 sk-text">238.00</text>
                  </view>
                </navigator>
                <navigator class="goods data-v-97f6f596" hover-class="none">
                  <image class="image data-v-97f6f596 sk-image"></image>
                  <view class="name ellipsis data-v-97f6f596 sk-transparent sk-text-14-2857-414 sk-text">全新升级，四川酸辣粉195克*6杯</view>
                  <view class="price data-v-97f6f596">
                    <text class="symbol data-v-97f6f596 sk-transparent sk-opacity">¥</text>
                    <text class="number data-v-97f6f596 sk-transparent sk-text-14-2857-106 sk-text">69.00</text>
                  </view>
                </navigator>
                <navigator class="goods data-v-97f6f596" hover-class="none">
                  <image class="image data-v-97f6f596 sk-image"></image>
                  <view class="name ellipsis data-v-97f6f596 sk-transparent sk-text-14-2857-331 sk-text">川味牛肉辣椒酱190克</view>
                  <view class="price data-v-97f6f596">
                    <text class="symbol data-v-97f6f596 sk-transparent sk-opacity">¥</text>
                    <text class="number data-v-97f6f596 sk-transparent sk-text-14-2857-332 sk-text">38.00</text>
                  </view>
                </navigator>
                <navigator class="goods data-v-97f6f596" hover-class="none">
                  <image class="image data-v-97f6f596 sk-image"></image>
                  <view class="name ellipsis data-v-97f6f596 sk-transparent sk-text-14-2857-734 sk-text">极光限定 珠光蓝珐琅锅</view>
                  <view class="price data-v-97f6f596">
                    <text class="symbol data-v-97f6f596 sk-transparent sk-opacity">¥</text>
                    <text class="number data-v-97f6f596 sk-transparent sk-text-14-2857-748 sk-text">199.00</text>
                  </view>
                </navigator>
                <navigator class="goods data-v-97f6f596" hover-class="none">
                  <image class="image data-v-97f6f596 sk-image"></image>
                  <view class="name ellipsis data-v-97f6f596 sk-transparent sk-text-14-2857-566 sk-text">钻石陶瓷涂层多用锅18cm 小奶锅</view>
                  <view class="price data-v-97f6f596"></view>
                </navigator>
                <navigator class="goods data-v-97f6f596" hover-class="none">
                  <image class="image data-v-97f6f596 sk-image"></image>
                  <view class="name ellipsis data-v-97f6f596 sk-transparent sk-text-14-2857-17 sk-text">智利老牌名庄，梅洛干红750毫升</view>
                  <view class="price data-v-97f6f596"></view>
                </navigator>
                <navigator class="goods data-v-97f6f596" hover-class="none">
                  <image class="image data-v-97f6f596 sk-image"></image>
                  <view class="name ellipsis data-v-97f6f596 sk-transparent sk-text-14-2857-119 sk-text">原产兰州，气清味美，甜百合干168克</view>
                  <view class="price data-v-97f6f596"></view>
                </navigator>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
    </view>
  </template>

  <style>

.sk-transparent {
    color: transparent !important;
  }
.sk-text-14-2857-325 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.0698rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-14-2857-725 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-763 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-533 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-477 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-723 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-557 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-243 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-284 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-14-2857-444 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 34.1860rpx;
    position: relative !important;
  }
.sk-text-26-4706-311 {
    background-image: linear-gradient(transparent 26.4706%, #EEEEEE 0%, #EEEEEE 73.5294%, transparent 0%) !important;
    background-size: 100% 59.3023rpx;
    position: relative !important;
  }
.sk-text-30-8824-466 {
    background-image: linear-gradient(transparent 30.8824%, #EEEEEE 0%, #EEEEEE 69.1176%, transparent 0%) !important;
    background-size: 100% 59.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-941 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-opacity {
    opacity: 0 !important;
  }
.sk-text-14-2857-877 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-text-14-2857-324 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-995 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-text-14-2857-968 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-456 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-text-14-2857-414 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-106 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-text-14-2857-331 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-332 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-text-14-2857-734 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-748 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 31.7442rpx;
    position: relative !important;
  }
.sk-text-14-2857-566 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-17 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-text-14-2857-119 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.3023rpx;
    position: relative !important;
  }
.sk-image {
    background: #EFEFEF !important;
  }
.sk-pseudo::before, .sk-pseudo::after {
      background: #EFEFEF !important;
      background-image: none !important;
      color: transparent !important;
      border-color: transparent !important;
    }
.sk-pseudo-rect::before, .sk-pseudo-rect::after {
      border-radius: 0 !important;
    }
.sk-pseudo-circle::before, .sk-pseudo-circle::after {
      border-radius: 50% !important;
    }
.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
  }


  </style>