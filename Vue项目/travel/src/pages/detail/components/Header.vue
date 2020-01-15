<template>
<div>
  <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
    <div class="iconfont iconfanhui header-abs-back"></div>
  </router-link>
  <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
    <router-link to="/">
      <div class="iconfont iconfanhui header-fixed-back"></div>
    </router-link>
    景点详情
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  // 如果mounted和unmounted改成activated和deactivated会有问题
  mounted () {
    // 全局，需要解绑！
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles'
.header-abs
  position absolute
  left .2rem
  top .2rem
  width .8rem
  height .8rem
  line-height .8rem
  border-radius .4rem
  background rgba(0, 0, 0, .6)
  text-align center
  .header-abs-back
    color #fff
    font-size .4rem
.header-fixed
  z-index 1
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  font-size .32rem
  background-color $bgColor
  .header-fixed-back
    width .64rem
    text-align center
    font-size .33rem
    position absolute
    top 0
    left .05rem
    color #fff
</style>
