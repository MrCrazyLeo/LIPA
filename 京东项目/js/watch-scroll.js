/**
 * 控制顶部搜索栏的显示与隐藏,实现一键回到顶部
 */
var search_logo = $('.search-m_logo')[0]
// 获取顶部搜索栏div
var target = $('#search')[0]
// toTop回顶部按钮
var toTop = $('#toTop')
var elevator = $('.elevator')

window.onscroll = function() {
  // 获取滚动条滚动距离
  let top = getScroll().scrollTop;
  if (top > 720) {
    target.classList.add('search-fix')
    search_logo.classList.add('search-m_logo_roll')
    if (top >= 721) elevator.addClass('elevator_fix')
    if (top >= 1200) elevator.addClass('elevator_recommend')
    if (top < 1200) elevator.removeClass('elevator_recommend')
    if (top < 721) elevator.removeClass('elevator_fix')
  } else {
    target.classList.remove('search-fix')
    search_logo.classList.remove('search-m_logo_roll')
    elevator.removeClass('elevator_fix elevator_recommend')
  }
}

var timerId = null
toTop.click(function() {
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  }
  timerId = setInterval(function() {
    let current = getScroll().scrollTop
    let step = 10
    let targetTop = 0
    if (current > targetTop) {
      step = - Math.abs(step)
    }
    if (Math.abs(current - targetTop) <= Math.abs(step)) {
      clearInterval(timerId)
      document.documentElement.scrollTop = document.body.scrollTop = targetTop;
    }
    current += step;
    document.documentElement.scrollTop = document.body.scrollTop = current
  }, 5)
})
