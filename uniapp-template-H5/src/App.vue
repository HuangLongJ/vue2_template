<script>
import { hiddenHeader, checkInWX } from '@/utils/uniApi';
export default {
  onLaunch: function () {
    console.log('App Launch');
    if (checkInWX()) {
      console.log('微信环境');
    } else {
      console.log('非微信环境');
    }
    hiddenHeader();
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
};
</script>

<style lang="scss">
/*每个页面公共css */
@import 'vant/lib/index.css';
$display: var(--display, block);
$minHeight: var(--minHeight, calc(100vh - 2.9rem));
/* 标题栏显示 */
uni-page-head {
  display: $display;
}
/* 有标题栏与无标题栏高度 */
.bg {
  box-sizing: border-box;
  width: 100%;
  min-height: $minHeight;
  position: relative;
}
</style>
