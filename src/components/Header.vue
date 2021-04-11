<template>
  <header>
    <div class="header-body">
      <div class="header-logo">
        <router-link to="/">
          <img src="../assets/image/logo.png">
        </router-link>
      </div>
      <div class="header-nav">
        <nav class="font-heading">
          <div class="header-link">
            <router-link to="/contact" class="href-link">联系我</router-link>
            <router-link to="/about" class="href-link">关于</router-link>
          </div>
          <div class="header-control">
            <div class="search-blog">
              <i class="iconfont icon-blog-search"></i>
              搜索
              <Search class="search" />
            </div>
            <div class="contact-drop">
              联系方式
            </div>
            <div class="light-switch">
              <Tooltip
                :text="state.theme === 'light' ? '关灯' : '开灯'"
                :effect="state.theme === 'light' ? 'light' : 'dark'"
              >
                <Switch :defaulVal="state.theme === 'light'" @change="getSwitchVal" />
              </Tooltip>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { useStore } from 'vuex'
import Switch from './public/Switch.vue'
import Tooltip from './public/Tooltip.vue'
import Search from './Search.vue'
export default {
  components: {
    Switch,
    Tooltip,
    Search
  },
  setup() {
    const { state, commit } = useStore()

    const getSwitchVal = val => {
      const theme = val ? 'light' : 'dark'
      commit('setTheme', theme)
      localStorage.setItem('globalTheme', theme)
    }

    return {
      getSwitchVal,
      state
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/tool';

header {
  height: 90px;
  box-sizing: border-box;
  border-bottom: $line;
  padding: 0 20px;

  .header-body {
    height: 100%;
    max-width: $content-size;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-logo {
      font-size: 0;
      
      a {
        height: auto;
        display: inline-block;
        font-size: 0;
      }
      img {
        height: 40px;
      }
    }
    .header-nav {
      font-size: 12px;

      nav {
        display: flex;
        color: $color-muted;

        .header-link {
          display: flex;
          align-items: center;
          a {
            margin-right: 20px;
            color: $color-muted;
          }
        }
        .header-control {
          display: flex;
          border-left: 1px solid #9b9b9b;
          align-items: center;
          
          &>div {
            margin-left: 20px;
            cursor: pointer;

            .iconfont {
              font-size: 14px;
            }
          }
          .search-blog {
            .search {
              position: fixed;
              left: 0;
              top: 144px;
            }
          }
        }
      }
    }
  }
}
</style>