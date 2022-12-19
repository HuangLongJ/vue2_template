<template>
  <view class="content">
    <view class=""
      ><van-button type="warning" @click="clickHandle">返回</van-button>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
const toast = inject('toast');

onMounted(() => {
  toast('1111111');
});
const clickHandle = () => {
  uni.navigateTo({
    url: '../login/login',
  });
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
