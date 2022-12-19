<template>
  <view class="content">
    <Header data="header" />
    <view class="btn">
      <view>{{ data }}</view>
      <van-button type="warning" @click="clickHandle">跳转</van-button>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import Header from '@/component/common/header.vue';

const toast = inject('toast');

const props = defineProps({});
const emit = defineEmits([]);
const data = ref('内容');
console.log(data.value);

onMounted(() => {
  toast('提示内容');
});
const clickHandle = () => {
  uni.navigateTo({
    url: '../homepage/homepage',
  });
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .btn {
    width: 300rpx;
    height: 100%;
    background-color: pink;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
