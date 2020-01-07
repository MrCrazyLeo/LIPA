// 控制顶部搜索栏的显示与隐藏
window.onscroll = function() {
  // 获取滚动条滚动距离
  let top = document.documentElement.scrollTop;
  let search_logo = document.getElementsByClassName('search-m_logo')[0]
  // 获取顶部搜索栏div
  let target = document.getElementById('search')
  if (top > 720) {
    target.classList.add('search-fix')
    search_logo.classList.add('search-m_logo_roll')
  } else {
    target.classList.remove('search-fix')
    search_logo.classList.remove('search-m_logo_roll')
  }
}