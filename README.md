# 使用Vue2.x来重构项目

[![Build Status](https://travis-ci.org/lzkui2013/vue_lebo.svg?branch=master)](https://travis-ci.org/lzkui2013/vue_lebo)

> 学习vue也是有一段时间了，看来许多别的写的项目，都是一些比较简单的demo，只能算的上是为了使用vue而写的demo，没有一个从完整的项目角度来阐述如何去使用vue，所以这里打算结合自己之前做过的项目，只是仿造样式和交互，而所有的内在均使用vue去重写，充分去学习vue。


### 原始项目地址 [m.lebocp.com](http://m.lebocp.com);

原始项目使用的是 `requirejs` 组织前端js，开发时候，使用`grunt + grunt-contrib-requirejs + 压缩静态文件`的方法，也是会抽取公共方法，所有很有一些组件化开发的雏形。

在 `css` 的维护方面是使用 `less` 来组织，但是因为项目初始的时间比较久远，刚开始使用的是直接使用css来组织，没有完美的利用好less的很多功能特性，而这些，将会在本项目中得到很多的优化。

![乐博原始项目地址](http://7xp7di.com1.z0.glb.clouddn.com/lebo_url.png)


### Vue项目地址[http://vgsir.com/demos/vue_lebo/](http://vgsir.com/demos/vue_lebo/)(完善中...)

1. 本项目使用vue2.x来重构，充分去利用组件化开发的优势，极大地重用可重用的部分，让项目更加利于开发和维护
2. 引入单元测试`(karma + mocha + chai)`，来保证代码的可执行性。并且期望代码测试的覆盖率达到`90%`(目前正在努力中..)以上
3. 使用 `docsify` 编写项目文档，保证项目的可维护和完善性

![vue_lebo项目demo地址](http://7xp7di.com1.z0.glb.clouddn.com/vue_leo_url.png)

### 收获
1. 最大的收获就是开发的理念的升级，前端开发早已经不是刀耕火种的年代，而是工程化，高度的工程化，从开发的代码规则规范-代码的分割组织，组件化-可测试性-上线的流程化
2. MVVC框架编程思想，组件化编程思想，非常有别于以前的JQuery年代，也以为这可以加入单元测试

### clone项目

``` bash
# 安装依赖
npm install

# 在localhost:8080测试服务器查看项目
npm run dev

# 输出项目
npm run build

# 执行unit单元测试
npm run unit

```
