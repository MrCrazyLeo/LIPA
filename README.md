# LIPA
## 过，过个平安年
> 一. 学习原生js，html，css
>
> 学习方式：任意，对于学习过程中的心得或者重点，需要记录笔记。
>
> 学习成果展示：仿 https://www.jd.com/ 首页
>
> Iphone11 pro https://www.apple.com.cn/cn/iphone-11-pro/
>
> 时间：1-2周内完成
>
> 二. 学习vue
>
> 学习方式：视频学习，掌握vue基础用法
>
> 学习成果展示：每天提交的代码上传到github上，并且完整的功能演示，效果可以在线预览。对于学习过程中的心得或者重点，需要记录笔记。
>
> 时间：2周完成
>
> 三. vue进阶
>
> 学习方式：视频学习，内容待定，视前面的学习效果确定，调整。
>
> PS：还有个明年的算法培训计划



### 12月23日

JD首页素材获取（取自类似开源项目）、布局分析

轮播图、蒙版遮罩、懒加载、倒计时、搜索框下拉到一定范围之后吸顶、 text-overflow实现省略号



### 12月24日

- iconfont图标使用、reset.css、less代码规范、实现轮播图的几种形式、下拉窗口中子界面的布局、

**PS**：“clstag”这个不标准的自定义类型从好多年前别人在研究京东的代码时就有讨论了

**PS**：今天我的广告又被ADP插件拦截了，2次，自己坑自己。

- 拜读了京东凹凸实验室关于2019商城首页改版的分享，主要涉及到一下几个方面：

  1. 针对JavaScript 这种弱类型语言在不可预测性上的缺陷，使用TypeScript重构；
  2. 升级资源构建方案，使用webpack4进行发布流程的优化；
  3. 项目架构优化，分离模板代码和核心代码，增强打包的可预测性、优化项目资源架构；
  4. 接入自动化测试 （Nightwatch.js）；
  5. 完善监控体系；
  6. 使用骨架屏优化页面加载体验；
  7. 优化信息无障碍体验，造福国内一百一十人中的一个视障人士

  

> **DRY**(Don`t Repeat Youeself) 与 **WET**(We Enjoy Typing / Write Everything Twice) —— 《CSS揭秘》



### 12月25日

- 京东首页的秒杀在定时结束之后会自动隐藏
- 盒子300px跟322px：这是box-sizing:border-box跟box-sizing:content-box带来的问题。改成box-sizing:content-box就正常了。


### 12月26日

改bug，没弄这边

### 12月27日

写整体框架，今天打算弄完快捷导航栏shortcut

有点写不动，样式管理也是极乱。目前都是根据原JD首页的HTML结构写。跟它写不知道为什么它要加杂七杂八的class名。目前打算跟着视频看别人怎么写的，我争取尽快把首页搞定。。。还原相同的UI本来就有很多种方式，我不想被它牵着鼻子走。

BFC、清浮动、样式管理



### 12月28-29日

完成了快捷导航栏shortcut和中间头部分w middle。



### 12月30日

完成首页的2/3，包括头部和注脚。视情况完成中间展示部分。

实现三栏布局的几种方法：

- 左栏向左浮动，右栏向右浮动，中间设margin: 0 auto
- 左右两栏绝对定位，中间设margin: 0 auto
- 左栏中间栏右栏左浮，左栏margin-left：-100%，中间栏宽100%,，右栏margin-left:-右栏宽度且布局上必须中间栏放第一个



### 1月5日

时间过得真快。惭愧，首页还是没完成。在边弄首页，边完善项目的定时器小组件，边学习vue。这周主要是修bug、年会排练。



### 1月6日

- **清浮动clearfix**：去除父元素样式没设置高度、子元素设置浮动导致父级没办法被内部撑开的问题。常用的清浮动方法有以下几种：
  - br标签清浮动

  - 父元素设置overflow: auto

  - 父元素设置overflow: hidden

  - after伪元素清浮动

    ```css
    .clearfix:after {
        content:"\200B"; 
        display:block; 
        height:0; 
        clear:both;
    }
    .clearfix { 
        *zoom:1; 
    }
    ```

    (1) **display:block** 使生成的元素以块级元素显示,占满剩余空间;

    (2) **height:0** 避免生成内容破坏原有布局的高度。

    (3) **content:"\200B"** Unicode字符里有一个“零宽度空格”，也就是U+200B，这个字符本身是不可见的

    (4) **zoom：1** 触发IE hasLayout。

  - 父元素设置display:table

  - 父元素浮动

- 将分割线写在伪元素::after里边，不失为一种好方法。



### 1月7日

- 轮播图原理

  - 设置一个可视区域screen，设置ul总长度（img * (N+1)张），在可视区域之外不可见，写animate脚本滑动一定距离来控制显示哪个li

- [\<button\>和\<input type='button'\>的区别](https://www.cnblogs.com/purediy/archive/2012/06/10/2544184.html)

- 增加/删除class

  - **html5增加了classList**

    classList 属性返回元素的类名，作为 DOMTokenList 对象。

    该属性用于在元素中添加，移除及切换 CSS 类。

    classList 属性是只读的，但你可以使用 add() 和 remove() 方法修改它。

    **增加**：document.getElementById("myDIV").classList.add('mystyle', 'anotherClass', 'thirdClass');

    **去除**：document.getElementById("myDIV").classList.remove('mystyle');

- jQuery增删class

  ``` js
  // 增添样式
  $('p').addClass('newClass')
  
  // 移除p元素中值为"high"的class
  $("p").removeClass("high"); 
  // 以空格的方式删除多个class名
  $("p").removeClass("high another"); 
  // 删除所有class
  $("p").removeClass()
  ```

  

### 1月8日

- 完成轮播图和一键回到顶部动画



### 1月9日

- 修改完搜索框弹出的问题

- 合并之前完成的地理位置下拉列表，首页基本完成。

  **主要实现**：首页布局、样式90%+相似；location下拉列表；轮播图；通过监听滚轮事件实现搜索框吸顶、侧边elevator固定和一键回到顶部；关闭顶部广告栏

  ![初步成果](media/初步成果.gif)

[在线展示地址](https://mrcrazyleo.github.io/LIPA/京东项目/index.html)





---

## 开始Vue的学习

计划完成 “Vue2.5开发去哪儿网App” 和 “Vue.js 2.5 + cube-ui重构饿了么App”



### 1月10号

完成去哪儿网项目（**Travel**）初始化、完成首页Header组件



### 1月11、12号周末

完成首页

<img src="media/去哪儿网APP首页.gif" alt="去哪儿网APP首页" style="zoom: 67%;" />



### 1月13日

完成城市选择页面，主要熟悉组件间的联动（兄弟组件通信、Vuex），熟悉新的钩子函数（created、activated），具体包括：

- 城市选择页面路由配置
- 搜索框布局
- 列表布局
- Better-scroll的使用及字母表布局
- 页面的动态数据渲染
- 兄弟组件间联动 —— 扔给父组件，父组件再扔给目标子组件
- 列表切换性能优化 —— 节流函数
- 搜索功能实现
- 使用Vuex实现数据共享 —— 解决了非兄弟组件间的数据通信问题

<img src="media/去哪儿网APP城市选择页面.gif" alt="去哪儿网APP城市选择页面" style="zoom:67%;" />

### 1月14日

解决昨日遗留的几个小任务，解决项目存在的小bug，完成详情页面的开发，包括：

- Vuex的高级使用（mapState、mapMutations、mapActions）和使用localStroage
- 使用keep-alive优化网页性能，使用lastCity记录是否同一个城市，避免多次请求相同数据
- 详情页面配置动态路由
- 公用图片画廊组件拆分
- 实现Header渐隐渐现的效果
- 对全局事件解绑
- 使用递归组件实现详情页列表
- 使用AJAX获取动态数据
- 在项目中加入基础动画

<img src="media/去哪儿网APP详情页面.gif" alt="去哪儿网APP详情页面" style="zoom: 67%;" />





### 1月15日

1. 修bug、项目联调、测试、发布上线，具体包括：

   - 接口联调 —— 启用本地服务器
   - 真机测试 —— 使用IP地址，.prevent解决字母表滚动bug。iPhone6图片加载不出来，但是city.json是有的，也是奇怪。Mi 5则是城市选择页面点击不了，可以scroll。问题等有空再回来处理。
   - 打包上线 —— webpack打包，host改成0.0.0.0
   - 异步组件的使用 —— 避免一次性加载所有js，项目js体积小，不做更好。
   - 总结、后续学习

2.  开始开发”媲美原生APP的饿了么商家页面“，包括商品列表页、评价页面、商家页面以及其它各种组件。

   - 技术栈：Vue.js + Vue cli + cube-ui

     ![饿了么项目核心技术](media/饿了么项目核心技术x.png)

   - 项目初始化

   - Header组件开发

     - 目录结构
     - axios封装&数据获取
     - header-detail & star组件
     - header-detail交互



### 1月16日

进行数据中台调研，日常进展暂停，抽空补充了些css、js的知识。



### 1月17日

1. Vue响应式原理

<img src="media/Vue数据响应式原理.png" alt="Vue数据响应式原理" style="zoom: 50%;" />

2. slot插槽
   1. Vue.js 2.6.0中引入v-slot代替原本slot和slot-scoped
   2. 具名插槽
   3. 动态插槽



### 1月22日

清除浮动的4种方式

- 额外标签法：在浮动元素末尾添加一个空标签如\<div style='clear:both'\>\<\div>或者其他标签如\<br>等

- 父级添加overflow属性方法：实则触发了BFC实现清浮动，overflow为auto|hidden|scroll都可以

- 使用after伪元素清浮动

  ```css
   .clearfix:after {  
       content: ".";
       display: block;
       height: 0;
       clear: both;
       visibility: hidden;
  }   
   .clearfix {*zoom: 1;}   /* IE6、7 专有 */
  ```

  

- 使用before、after双伪元素清除浮动

  ```css
  .clearfix:before,.clearfix:after { 
    content:"";
    display:table;  /* 触发BFC */
  }
  .clearfix:after {
   clear:both;
  }
  .clearfix {
    *zoom:1;
  }
  ```

  

### 2月5日

（待完善）

#### 创建对象

1. **工厂模式**

   ```js
   function createHero(name, blood, weapon) {
       var o = new Object();
       o.name = name;
       o.blood = blood;
       o.weapon = weapon;
       o.attack = function() {
           console.log(this.weapon + ' 攻击敌人')
       }
       return o;
   }
   var LiuBei = createHero('刘备', 100, '剑')
   var ZhangSan = createHero('张三', 120, '斧头')
   ```

   解决了创建多个相似对象代码冗余的问题，没有解决对象识别的问题（即怎样知道一个对象的类型）。

   

2. **构造函数模式**

   ```js
   function Hero(name, blood, weapon) {
       this.name = name;
       this.blood = blood;
       this.weapon = weapon;
       this.attack = function() {
           console.log(this.weapon + ' 攻击敌人')
       }
   }
   var LiuBei = new Hero('刘备', 100, '剑')
   LiuBei.attack()
   ```

   

3. **原型模式**

   ```js
   function Student(name, age){
       this.name = name;
     this.age = age
   }
   Student.prototype = {    
       constructor: Student,
     sayHi: function() {
           console.log("Hi!")
       },
       eat: function() {
           console.log("Eat.")
       }
   }
   var s1 = new Student('zs', 18)
   ```

   使用 prototype 原型对象解决构造函数的问题，将公用函数“注册”到原型链上去。

   

4. **组合使用构造函数模式和原型模式**

5. **动态原型模式**

6. **寄生构造函数模式**

7. **稳妥构造函数模式**

#### 继承



### 2月10号

因弄懂黄毅老师的课程需要，研究vue cli脚手架工具初始化的问题。看完[3小时速成Vue2.x核心技术](https://www.imooc.com/video/18571)课程



### 2月11号

今天主要是弄清楚vue1.x升级到2.x版本的问题，有个知识储备好在接下来跟课程时不至于太懵圈

#### 1.0升级到2.0

**初始化路由变化：**

v-link指令替换为\<router-link\>组件

**Vue 2.0语法变化：**

v-for指令的变化

v-el、v-ref指令的变化 => ref 跟 this.$refs.xxxxx，为了精简API

模板变化，组件只允许一个根元素 => \<template\>下多个元素的话，需要一个div标签包裹

组件通信变化 $dispatch废除

事件监听变化，废除events属性

不能在子组件直接修改父组件传入的prop

过渡的变化



### 2月13-14号

熟悉echarts



### 2月15号

#### Vue进阶1

1. 反复阅读Vue官方文档

   1. v-model其实就是个语法糖，现版本能为不同的输入元素使用不同的属性并抛出不同事件。

      ```js
      <input v-model="inputValue" />
      // 其实等价于：
      <input :value="inputValue" @input="inputValue = $event.target.value"
      ```

      > - text 和 textarea 元素使用 `value` 属性和 `input` 事件；
      > - checkbox 和 radio 使用 `checked` 属性和 `change` 事件；
      > - select 字段将 `value` 作为 prop 并将 `change` 作为事件。

2. 继续跟进慕课课程



### 2月18号

#### Vue进阶2

1. is属性 —— 动态组件

2. 原生 .native

3. 插槽
   1. 具名插槽 
   
      ```vue
      <!--- 父组件 --->
      <div class="container">
          <header>
              <slot name="header"></slot>
          </header>
          <main>
              <slot></slot>
          </main>
          <footer>
              <slot name="footer"></slot>
          </footer>
      </div>
      
      <!--- 子组件 --->
      <base-layout>
          <template v-slot:header>
      		<h1>
                  这是个title
              </h1>
          </template>
          <template>
      		<p>
                  这是正文
              </p>
          </template>
          <template v-slot:footer>
      		<p>
                  这是footer
              </p>
          </template>
      </base-layout>
      ```
   
      缩写：#
   
   2. 作用域插槽
   
      ```html
      <current-user>
        <template v-slot="scoped">
          {{ scoped.user.firstName }}
        </template>
      </current-user>
      ```
   
      
   
4. bus总线 订阅-发布者模式



### 2月26号

- Mixin
- max-width