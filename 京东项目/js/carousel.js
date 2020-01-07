// 实现轮播图脚本
var itemList = $('.sliderBannerWrapper ul')[0].children
var arrow_l = $('.arrow-l')[0]
var arrow_r = $('.arrow-r')[0]
var index = 0
var currentIndex = 0
var len = itemList.length // 8
var ol = $('.slider_indicators ol')[0]
// 1. 利用平移transform: tranlateY(`-470*${index}px`)实现轮播
// 2. 对应图片个数自动生成小圆点
for (let i = 0; i < len; i++) {
  let li = document.createElement('li')
  li.setAttribute('class', 'slider_indicators_btn')
  li.innerText = i + 1
  ol.append(li)
}
ol.children[0].classList.add('slider_indicators_btn_active')
// 3. 自动切换图片 setInterval