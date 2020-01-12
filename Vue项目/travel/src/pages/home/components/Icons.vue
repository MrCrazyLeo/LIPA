<template>
  <div class="icons">
    <div class='icon'>
      <div class="icon-img">
        <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png">
        <p>热门景点</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
  .icons
    overflow hidden
    width 100%
    height 0
    padding-bottom 50%
    background green
    .icon
      overflow hidden
      position relative
      width 25%
      float left
      padding-bottom 25%
      background red
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        background blue
        .icon-img-content
          height 100%
</style>
