<template>
  <header>
    <div class="header-body">
      <div class="header-logo">
        <img src="../assets/image/logo.png">
      </div>
      <div class="header-nav">
        nav
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/style/tool';

header {
  height: 90px;

  .header-body {
    height: 100%;
    width: $content-size;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-logo {
      img {
        height: 40px;
      }
    }
    .header-nav {

    }
  }
}
</style>