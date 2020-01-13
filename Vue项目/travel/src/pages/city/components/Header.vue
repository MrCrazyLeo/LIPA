<template>
<div class="header">
  城市选择
  <router-link to="/">
    <div class="iconfont iconfanhui back"></div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles'
.header
  position relative
  height $headerHeight
  line-height $headerHeight
  overflow hidden
  text-align center
  color #fff
  font-size .32rem
  background-color $bgColor
  .back
    width .64rem
    text-align center
    font-size .33rem
    position absolute
    top 0
    left .05rem
    color #fff
</style>
