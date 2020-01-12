<template>
<div class="header">
  <div class="header-left">
    <div class="iconfont iconfanhui back-icon"></div>
  </div>
  <div class="header-input">
    <span class="iconfont iconsousuo"></span>
    输入城市/景点/游玩主题
  </div>
  <div class="header-right">
    北京
    <span class="iconfont iconxiajiantou"></span>
  </div>
</div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display flex
  line-height .86rem
  background-color $bgColor
  color #fff
  .header-left
    width 0.64rem
    float left
    .back-icon
      text-align center
      font-size 0.32rem
  .header-input
    flex 1
    height 0.64rem
    line-height 0.64rem
    margin-top .12rem
    margin-left .2rem
    background-color #fff
    border-radius .1rem
    color #ccc
    padding-left .15rem
  .header-right
    width 1.24rem
    float right
    text-align center
</style>
