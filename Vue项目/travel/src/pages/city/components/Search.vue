<template>
<div>
  <div class="search">
    <input class="search-input" type="text" name="search" placeholder="输入城市名或拼音" v-model="keyword">
  </div>
  <div class="search-content" ref="search" v-show="keyword">
    <ul>
      <li v-for="item of list" :key="item.id" class="search-item border-bottom" @click="handleCityClick(item.name)">
        {{item.name}}
      </li>
      <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
    </ul>
  </div>
</div>

</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
      // 选择城市之后要记得将keyword清空，否则点进来还是停留在搜索页面
      this.keyword = ''
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles'
.search
  height .72rem
  padding 0 .1rem
  background-color $bgColor
  .search-input
    box-sizing border-box
    width 100%
    height .62rem
    line-height .62rem
    text-align center
    border-radius .06rem
    color #666
.search-content
  z-index 1
  position absolute
  overflow hidden
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eee
  .search-item
    line-height .62rem
    padding-left .2rem
    color #666
    background #fff
</style>
