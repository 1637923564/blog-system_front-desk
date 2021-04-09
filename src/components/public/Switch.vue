<template>
  <div class="c-switch" :style="wrapStyle" @click="controlSwitch">
    <i :style="iStyle"></i>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup() {
    const val = ref(false) // 为 false 时滑块是关闭状态

    const iStyle = computed(() => {
      return val.value ? 'left: calc(100% - 12px)' : 'left: 2px'
    })
    const wrapStyle = computed(() => {
      return val.value ? 'background-color: #5869DA' : 'background-color: #666'
    })

    const controlSwitch = () => {
      val.value = !val.value
      console.log(val.value);
    }
    
    return {
      val,
      wrapStyle,
      iStyle,
      controlSwitch
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-switch {
    position: relative;
    width: 28px;
    height: 14px;
    border-radius: 10px;

    i {
      position: absolute;
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-radius: 50%;
      top: 2px;
      transition: all .1s linear;
    }
  }
</style>