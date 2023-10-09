<template>
    <view class="category">

        <navigator
            url="/pages/index/index"
            class="navitem"
            hover-class="none"
            v-for="(item, index) in list"
            :key="index"
        >

            <image
                class="icon"
                :src="item.icon"
            />
            <text>{{ item.name }}</text>
            
        </navigator>

    </view>
</template>

<script setup lang="ts">
import type { BtnListItem} from '@/types/home';

defineProps<{
    list: BtnListItem[]
}>()

</script>

<style scoped lang="scss">

.category {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-content: space-around;
    flex-wrap: wrap;
    margin-top: 15px;
    .navitem {
        width: 20%;
        height: 150rpx;
        margin-bottom: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
            width: 100rpx;
            height: 100rpx;
        }
    }
}
</style>