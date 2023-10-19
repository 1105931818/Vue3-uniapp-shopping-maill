<template>

  <CustomNavbar />
 
  <scroll-view 
  refresher-enabled 
  :refresher-triggered="isTigger"
  scroll-y 
  class="content" 
  @scrolltolower="scrollList" 
  @refresherrefresh="refLading">
  
    <PageSkeleton v-if="isShow" />


    <template v-else>

      <cust-Swiper :list="bannerList" height="200px" />

      <Category :list="btnList" />
   
      <Hotpanel :list="hotList" />

      <cust-Guess ref="guess" />

    </template>

    

  </scroll-view>

</template>

<script setup lang="ts">
import CustomNavbar from "./components/CustomNavbar.vue";
import Category from "./components/Category.vue";
import Hotpanel from "./components/Hotpanel.vue";
import PageSkeleton from "./components/PageSkeleton.vue";
import type { BannerItem, BtnListItem, HotListItem } from "@/types/home";
import { getHomeBannerAPI, getCategoryAPI, getHotAPI } from '@/services/home'
import { onLoad } from "@dcloudio/uni-app";
import { ref } from 'vue';
import type { custGuessInstance } from "@/types/components";

const bannerList = ref<BannerItem[]>([])

const btnList = ref<BtnListItem[]>([])

const hotList = ref<HotListItem[]>([])

const guess = ref<custGuessInstance>()

const isTigger = ref<boolean>(false)

const isShow = ref<boolean>(true)

const getBanner = async () => {
    const result = await getHomeBannerAPI()
    bannerList.value = result.result
}

const getbtnList = async () => {
  const result = await getCategoryAPI()
  btnList.value = result.result
}

const getHotList = async () => {
  const result = await getHotAPI()
  hotList.value = result.result
}

const scrollList = () => {
  guess.value?.getMore();
}

const refLading = async () => {
  isTigger.value = true
  guess.value?.resetData();
  await Promise.all([getBanner(), getbtnList(), getHotList(), guess.value?.getMore()])
  isTigger.value = false
}

onLoad(async () => {
  await Promise.all([getBanner(), getbtnList(), getHotList()])
  isShow.value = false
})

</script>

<style lang="scss">

page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  width: 100%;
  height: calc(100% - 142px);
}

</style>
