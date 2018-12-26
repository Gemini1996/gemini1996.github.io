---
title: DOM
tags:
  - DOM
categories:
  - JavaScript
date: 2018-12-26 15:27:30
---
DOM - 文档对象模型(Document Object Model)
<!--more-->
## DOM简介
DOM是针对HTML和XML的一个API。
DOM描绘了一个层次化的节点数，允许开发人员添加、移除和修改页面的某一部分。
## DOM节点层次
DOM可以将任何HTML或XML文档描绘成一个由多层节点构成的结构。
### 文档 (Document)
一个网页可以称为文档
### 元素 (Element)
每个html标签就是一个元素。
#### 文档元素/根元素
文档元素是文档的最外层元素。
在HTML页面中，文档元素始终都是<html\>元素
### 节点 (Node)
在DOM中，网页中所有内容(标签、属性、文本、注释等)都是节点。
## DOM树
由文档以及文档中的标签组成的树状结构图，称为DOM树

![DOM树](http://www.w3school.com.cn/i/ct_htmltree.gif)

## DOM方法
### 获取页面元素的方法
#### 根据id获取元素
getElementById()
#### 根据标签名获取元素的节点列表
getElementsByTagName()
#### 根据类名获取元素的节点列表
getElementsByClassName()
#### 根据选择器获取元素的节点列表
querySelector()
querySelectorAll()
