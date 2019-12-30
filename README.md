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
> 学习方式：视频学习，掌握vue基础用法：https://pan.baidu.com/s/1K6O-VtXfLbAh7vKK7Sh19A#list/path=%2F 提取码vv30，其他学习资料补充任意
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

- 12月24日平安夜的京东首页

![191224平安夜的京东首页](JD/191224平安夜的京东首页.gif)

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
- 在下拉列表中间莫名有个空隙
![](C:/Users/Lenox/AppData/Roaming/Typora/typora-user-images/1577255982930.png)

![1577256041203](C:/Users/Lenox/AppData/Roaming/Typora/typora-user-images/1577256041203.png)

盒子300px跟322px：这是box-sizing:border-box跟box-sizing:content-box带来的问题。改成box-sizing:content-box就正常了。



### 12月26日

改bug，没弄这边



###　12月27日

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

