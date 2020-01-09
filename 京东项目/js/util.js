// 获取页面滚动距离的浏览器兼容性问题
// 获取页面滚动出去的距离
function getScroll() {
  var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  return {
    scrollLeft,
    scrollTop
  }
}

// 获取鼠标在页面的位置，处理浏览器兼容性
function getPage(e) {
  var pageX = e.pageX || e.clientX + getScroll().scrollLeft;
  var pageY = e.pageY || e.clientY + getScroll().scrollTop;
  console.log('鼠标 pageX: ', pageX)
  console.log('鼠标 pageY: ', pageY)
  return {
    pageX,
    pageY
  }
}

var closeTopBar = $('#close-top-bar')
closeTopBar.click(function () {
  $('header').hide()
})