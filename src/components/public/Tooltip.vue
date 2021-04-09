<template>
  <div class="c-tooltip">
    <slot></slot>
    <div class="tooltip-wrap">
      <i class="tooltip-icon" :style="theme"></i>
      <div class="tooltip-text" :style="theme">
        {{text}}
      </div>
    </div>
  </div>
</template>

<script>
import { computed, toRefs } from 'vue'

export default {
  props: {
    text: {
      type: String,
      required: true
    },
    effect: {
      type: String,
      default: 'light'
    }
  },
  setup(props) {
    props = toRefs(props)
    
    const theme = computed(() => {
      if (props.effect.value === 'dark') {
        return {
          color: '#fff',
          backgroundColor: '#000c2d'
        }
      } else {
        return ''
      }
    })
    
    return {
      text: props.text,
      theme
    }
  }
}
</script>

<style lang="scss" scoped>
$shadow: 0 0 12px rgba($color: #000000, $alpha: .06);

@mixin colorTrans {
  transition-property: color, background-color;
  transition-timing-function: ease-out;
  transition-duration: .8s;
}

.c-tooltip {
  position: relative;
  &:hover .tooltip-wrap {
    opacity: 1;
    top: calc(100% + 12px);
    visibility: visible;
  }

  .tooltip-wrap {
    position: absolute;
    top: calc(100% + 20px);
    width: 60px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 6px;
    box-shadow: $shadow;
    cursor: default;
    visibility: hidden;
    opacity: 0;
    transition: all .2s ease-out;

    i.tooltip-icon {
      content: '';
      display: block;
      position: absolute;
      background-color: #fff;
      width: 8px;
      height: 8px;
      top: -4px;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      box-shadow: $shadow;
      z-index: -1;
      @include colorTrans;
    }
    .tooltip-text {
      position: relative;
      padding: 8px;
      box-sizing: border-box;
      height: 100%;
      background-color: #fff;
      border-radius: 4px;
      text-align: center;
      @include colorTrans;
    }
  }
}
</style>