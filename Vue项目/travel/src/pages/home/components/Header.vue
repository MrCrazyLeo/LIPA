<template>
<div class="header">
  <div class="header-left">
    <div class="iconfont iconfanhui back-icon"></div>
  </div>
  <div class="header-input">
    <span class="iconfont iconsousuo"></span>
    输入城市/景点/游玩主题
  </div>
  <router-link to="/city">
    <div class="header-right">
      {{this.city}}
      <span class="iconfont iconxiajiantou"></span>
    </div>
  </router-link>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组
    // 让this.$store.state.city直接改为this.city使用
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display flex
  line-height $headerHeight
  background-color $bgColor
  color #fff
  .header-left
    width 0.54rem
    padding-left .1rem
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
    min-width 1.04rem
    padding 0 .1rem
    float right
    text-align center
    color #fff
</style>
