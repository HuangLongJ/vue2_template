<template>
  <view> 我是{{ data }} </view>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  data: String,
});
console.log(props.data);
const emit = defineEmits([]);

defineExpose({});
</script>

<style scoped lang="scss"></style>
