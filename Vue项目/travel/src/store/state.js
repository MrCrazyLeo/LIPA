let defaultCity = '深圳'
// 避免用户关闭localStorage或者使用隐身模式
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
