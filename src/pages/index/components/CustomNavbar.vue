<template>
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
        <view class="logo" >
            <text style="font-size: 40rpx; font-weight: 600;">小兔鲜儿</text>
            <text>&nbsp;｜&nbsp; 新鲜 &nbsp; 亲民 &nbsp; 快捷</text>
        </view>

        <view class="search">
            <image
                src="../../../static/svgs/search.svg"
                style="width: 20px; height: 20px; margin-right: 10px"
            />

            <text>
                搜索    
            </text>

            <image
                src="../../../static/svgs/code.svg"
                style="width: 20px; height: 20px; margin-left: 10px"
                @tap="openCode"
            />
        </view>

    </view>
</template>

<script setup lang="ts">

//屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync();

//二维码扫描
const openCode = () => {
    uni.scanCode({
        success: (res) => {
            console.log(res, '扫描成功');
        },
        fail:(fail)=>{
            console.log(fail, '扫描失败');
        },
        complete:(complete)=>{
            console.log(complete, '扫描完成');
        },
    });
}

</script>

<style scoped lang="scss">

.navbar {
    width: 100%;
    background-color: #27ba9b;
    color: white;
    padding-bottom: 3px;
    
    .logo {
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-left: 15px;
    }   

    .search { 
        width: 95%;
        height: 35px;
        margin: 5px auto;
        padding: 0 10px;
        box-sizing: border-box;
        background: rgba($color: #f3f3f3, $alpha: 0.45);
        border-radius: 17px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        text {
            width: calc(100% - 30px);
        }
    }

}

</style>