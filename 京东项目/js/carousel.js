// 实现轮播图脚本
var ul = $('.sliderBannerWrapper ul')[0]
var len = ul.children.length // 8 --> 9
// 左右箭头
var arrow_l = $('.arrow-l')[0]
var arrow_r = $('.arrow-r')[0]
// 可视窗口的宽度
var box = $('.sliderBannerWrapper')[0]
var imgWidth = box.offsetWidth // 590
var index = 0
var ol = $('.slider_indicators ol')[0]

// 1. 利用平移动画实现轮播
// 2. 对应图片个数自动生成小圆点
for (let i = 0; i < len; i++) {
  let li = document.createElement('li')
  li.setAttribute('class', 'slider_indicators_btn')
  li.innerText = i + 1
  ol.append(li)
  li.onclick = li.onmouseenter = liHover;
  li.setAttribute('index', i)
}

function liHover(){
  // 一律初始化
  for (let i = 0; i < len; i++ ) {
    let li = ol.children[i];
    li.setAttribute('class', 'slider_indicators_btn')
  }
  // 当前高亮
  this.classList.add('slider_indicators_btn_active')
  // 获取当前选中元素的序号
  var liIndex = parseInt(this.getAttribute('index'))
  animate(ul, -liIndex * imgWidth);
  // 全局变量index和li中的index保持一致
  index = liIndex;
}

// 初始化，显示第一张图片
ol.children[0].classList.add('slider_indicators_btn_active')

// 左右箭头切换图片
// 下一张
arrow_r.onclick = function () {
  if (index === len) {
    ul.style.left = '0px'
    index = 0
  }
  index++
  if (index < len) {
    ol.children[index].click()
  } else {
    // 如果是最后一张图片，以动画的方式，移动到克隆的第一张图
    animate(ul, -index * imgWidth);
    for (let i = 0; i < len; i++ ) {
      let li = ol.children[i];
      li.setAttribute('class', 'slider_indicators_btn')
    }
    ol.children[0].classList.add('slider_indicators_btn_active')
  }
}
// 上一张
arrow_l.onclick = function () {
  // 如果当前是第一张图片，切到克隆的第一张图片
  if (index === 0) {
    index = len;
    ul.style.left = -index * imgWidth + 'px'
  }
  index--;
  ol.children[index].click()
}

// 无缝滚动
var firstLi = ul.children[0]
var cloneLi = firstLi.cloneNode(true)
ul.appendChild(cloneLi)

// 自动切换图片 setInterval
var timeId = setInterval(function () {
  arrow_r.click()
}, 3000)

box.onmouseenter = function () {
  clearInterval(timeId)
}

box.onmouseleave = function () {
  timeId = setInterval(function () {
    arrow_r.click()
  }, 3000)
}