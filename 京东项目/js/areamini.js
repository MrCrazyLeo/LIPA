$(document).ready(function(){
  const areamini_item = $('.areamini-item-list')
  const city_name = ['北京', '上海', '天津', '重庆', '河北', '山西', '河南', '辽宁', '吉林', '黑龙江', '内蒙古', '江苏', 
                  '山东', '安徽', '浙江', '福建', '湖北', '湖南', '广东', '广西', '江西', '四川', '河南', '贵州', '云南', 
                  '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '港澳', '台湾', '钓鱼岛', '海外']
  const city_length = city_name.length
  // 遍历city_name数组生成DOM元素
  function setCity(){
      for (item of city_name){
          console.log('城市：', item)
          let index = city_name.indexOf(item) + 1
          console.log('城市序号为：',index)
          let newDiv = document.createElement("div"); 
          newDiv.classList = 'item'
          let newA = document.createElement("a")
          newDiv.appendChild(newA)
          let newContent = document.createTextNode(`${item}`)
          newA.appendChild(newContent)
          newA.setAttribute('data-id', index) //HTML5 data-*属性
          newA.role = 'menuitem'
          if(item === '广东') {
              newA.setAttribute('class', 'selected')
          }
          areamini_item[0].appendChild(newDiv)
      }
  }
  setCity()
});