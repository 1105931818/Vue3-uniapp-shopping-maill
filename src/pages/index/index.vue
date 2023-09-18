<template>
  <view class="content">
    <CustomNavbar />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>

  </view>
</template>

<script setup lang="ts">
import CustomNavbar from "./component/CustomNavbar.vue";
import { ref } from 'vue'
const title = ref('Hello')
</script>

<style>

</style>
