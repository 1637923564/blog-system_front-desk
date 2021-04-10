<template>
  <section>
    <div class="search-wrapper">
      <h1>SEARCH</h1>
      <div class="search-input">
        <input
          type="text"
          placeholder="请输入您希望查找的关键字"
        >
        <i class="iconfont icon-blog-search"></i>
      </div>
      <div class="key-word">
        <h5>推荐关键字 :</h5>
        <ul>
          <li>World</li>
        </ul>
      </div>
    </div>
    
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/style/tool';
  section {
    height: calc(100% - 144px);
    width: 100%;
    cursor: default;

    .search-wrapper {
      width: $content-size;
      margin: 0 auto;
      padding-top: 83px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: 80px;
        opacity: .1;
        font-weight: normal;
        line-height: 1;
        margin-bottom: 44px;
      }
      .search-input {
        width: 770px;
        border-bottom: 3px solid $color-muted;
        height: 50px;
        box-sizing: border-box;
        display: flex;

        input {
          border: none;
          height: 100%;
          box-sizing: border-box;
          flex: 1;
          font-size: 18px;
          color: #495057;
          padding-left: 16px;
        }
        .iconfont {
          flex: 0 0 50px;
          line-height: 50px;
          text-align: center;
          cursor: pointer;
        }
      }
      .key-word {
        margin-top: 80px;
        width: 770px;
        h5 {
          margin-bottom: 16px;
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          li {
            margin: 0 10px;
            font-weight: normal;
          }
        }
      }
    }
  }
</style>