# HTML5特性

- #### 语义化标签

  语义化，离线&存储，设备访问，通信，

  多媒体，图形和特效，性能和集成，呈现

  - 语义化：HTML5赋予网页更好的意义和结构，span和div无语义。标准的说：提升页面的阅读性，有益于SEO，对于屏幕阅读器的人来说更友好。

  - 离线&缓存：Cache，本地存储功能，IndexedDB，FileAPI

  - 设备访问：为移动端开发而生，重力感应，全球地理定位，麦克风，摄像头

  - 通信：Websocket，Server-Sent Events实现双向连接，消息推送

  - 支持网页端的Audio，Video等多媒体功能，不再需要flash了

  - 图像和特效：图像增强，SVG，Canvas，WebGL，2D/3D游戏和页面视觉特效

  - 性能和集成：(减少)页面Loading的时间，增加了WebWorker，XMLHttpRequest2

  - 呈现：CSS3、styling

    ------

    优点&缺点

    网络标准统一，由于是W3C推出。多设备跨平台，及时更新。像video和audio这些新的多媒体元素有助于开发人员定义新的内容，迭代Flash和Silverlight，对SEO很友好，被大量地应用于移动应用程序和游戏。存在严重的安全问题，webStorage，websocket很容易被黑客利用盗取用户的信息，许多特效浏览器的支持程度不一样。平台引擎问题导致HTML5性能低下，不兼容IE9以下的浏览器。

    ------

    HTML5标签简要说明

    <head>里可以有：
        <base>暂时未用到</base>
        <title>导航栏的网页名称</title>
    	<link>导入第三方的CSS资源</link>
        <meta>关于页面的元信息，SEO友好，关键词，编码方式</meta>
        <script>链接一个外部脚本文件</script>
        <style>CSS样式</style>
    </head>


    em i斜体

    strong和b粗体

    mark高亮

    HTML对大小写不敏感

    table里th和caption的区别

    <meta><progess>都可以呈现进度条 表示特定范围内的数值


    autoplay自动播放，controls展示控件，loop循环播放，preload页面加载时加载预备播放，和autoplay差不多，poster将视频的第一帧换成图片，src播放源，muted(设置或返回音频或视频是否禁音)很重要！！！没有autoplay不起作用

    embed用来嵌入内容，适合midi，wav，aiff，au，MP3，flash，单或双都可 闭合标签，可以音频也可以视频

    input表单：color search range email url tel date number file text week time month 

    contentmenu menu弄不出来暂时🙂

    ------

    - html5和h5不同，h5是一系列的web技术出现的产物，html5是个人的web开发的规范。
    - 

- #### 浏览器支持

- #### 多媒体标签

- #### Canvas画布

  通过javascript来绘制2D图形，但是不能通过js来操作dom，他是逐像素进行渲染的

- #### SVG

  是一种使用XML语言描述2D图形的语言，可以通过JavaScript来处理DOM

- #### 本地存储 localStorage sessionStorage

  - cookie（大小<4K ）数据始终会在请求发送的时候一起携带过去，在浏览器和服务器之间来回传递。localStorage（大小>5M）仅在本地保存，不会自动把数据发送至服务器。

  - cookie的有效时间是设置的，只要不超出设置时间就一直不会失效，localStorage始终有效即使浏览器或窗口关闭，用作持久数据但不能跨浏览器，除非认为清除。localStorage.setItem(key, value) localStorage,getItem(key) lcoalStorage.remove(key) localStorage.clear()

  - localStorage支持事件通知机制，而且接口使用方便，cookie原生接口不好选需要自己封装。

  - sessionStorage会话级别的数据，会话关闭，数据消失，不可以设置过期时间。

    ------

    cookie不可获取他作为HTTP的一部分用来处理浏览器和服务器的通信是不可或缺的。

- #### Web Sql

- #### 应用缓存

- #### 无障碍

- #### 拖放API ：draggable="true" ondragstart="drag(event)"

- #### Web Worker

  webworker：用于多线程编程 websocket客户端和服务端双向数据通信协议

  webworker通过加载一个脚本文件从而创建一个独立工作的线程，在主线程之外运行。

  websocket为客户端和服务器之间提供了一种全双工通信机制，建立在TCP协议的基础上，属于应用层，没有同源限制，客服端可以与任意服务器通信，默认端口是80和443
