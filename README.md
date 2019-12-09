# tione
一个基于vue的UI组件库

[![Build Status](https://travis-ci.org/A-Tione/tione.svg?branch=master)](https://travis-ci.org/A-Tione/tione)

## 介绍

这是学习VUE过程中做的一个UI框架，希望你喜欢

## 开始使用
  1、 添加CSS样式
  - 使用本框架前，请在css中开启 border-box
  ```
  *,*::before,*::after{box-sizing: border-box;}
  ```
  - 你还需要设置默认颜色等变量（后续会改为 scss 变量）
  ```
  :root {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-color-hover: #666;
        }
  ```
  IE 15 及以上浏览器支持此样式

  2、 安装 tione
  ```
  npm i --save tione
  ```
  3、 引入 tione
  ```
  import {tButton,tIcon} from 'tione'
  import 'tione/dist/index.css'
  
  export default {
    name: 'app',
    components: {
      HelloWorld,
      tButton,
      tIcon
    }

  ```

  


## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

## 安装
