// 封装动画的函数
// element：DOM元素
// target: 偏移量
function animate(element, target) {
  // 通过判断，保证页面上只有一个定时器在执行动画
  if (element.timerId) {
    clearInterval(element.timerId);
    element.timerId = null;
  }
  element.timerId = setInterval(function () {
    // 盒子当前的位置
    var step = 10
    var current = element.offsetLeft;
    // 判断如果当前位置>目标位置 此时的step要小于0
    if (current > target) {
      step = - Math.abs(step);
    }
    if (Math.abs(current - target) <= Math.abs(step)) {
      // 让定时器停止
      clearInterval(element.timerId);
      // 让盒子到target的位置
      element.style.left = target + 'px';
      return;
    }
    // 移动盒子
    current += step;
    element.style.left = target + 'px';
  }, 5);
}

