<template>
  <div class="slide_box">
    <slide-verify class="slide_box" ref="block" :slider-text="$t('slider.hint')" :accuracy="accuracy" @again="onAgain"
      @success="onSuccess" @fail="onFail" @refresh="onRefresh"></slide-verify>
  </div>
</template>
<script>
import SlideVerify from 'vue3-slide-verify';
import 'vue3-slide-verify/dist/style.css';

export default {
  components: { SlideVerify },
  data() {
    return {
      block: null,
      accuracy: 70, // 添加了accuracy属性并设置初始值
    };
  },
  methods: {
    onAgain() { },
    onSuccess() {
      this.$emit('onSuccess');
      setTimeout(() => {
        this.onRefresh();
      }, 1100);
    },
    onFail() { },
    onRefresh() {
      this.block.value?.refresh();
    },
    resetSlider() {
      this.block.refresh();
    },
  },
  mounted() {
    this.block = this.$refs.block;
  },
};
</script>
<style>
.slide_box {
  margin: 0 auto;
}

.slide-verify-slider {
  border-radius: 60px;
}

.slide-verify-slider-mask-item {
  border-radius: 60px;
}

.slide-verify-slider-mask {
  border-radius: 60px 0 0 60px;
}
</style>