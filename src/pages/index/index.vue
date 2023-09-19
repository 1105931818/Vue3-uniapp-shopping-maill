<template>

  <CustomNavbar />
  
  <view class="content">
    
    <cust-Swiper />
   
  </view>

</template>

<script setup lang="ts">
import CustomNavbar from "./component/CustomNavbar.vue";
import { getHomeBanner } from '@/services/home'
import { onLoad } from "@dcloudio/uni-app";

const getBanner = async () => {
    const result = await getHomeBanner()
    console.log(result)
}

onLoad(() => {
  getBanner()
})

</script>

<style scoped lang="scss">

.content {
  width: 100%;
  margin-top: 154px;
}

</style>
