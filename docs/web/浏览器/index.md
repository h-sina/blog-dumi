# 解读CSS DOM JS顺序

DOM解析 CSS下载 CSS解析 DOM渲染 JS下载和执行

DOM渲染会被CSS解析阻塞 因为DOM渲染依靠CSS

CSS解析会阻塞JS （执行）因为JS会对CSS进行操作 需要CSS完成解析才能操作

JS执行会阻塞DOM解析 因为JS会对DOM进行操作

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4fe992dd57464159beaf6d851e827b05~tplv-k3u1fbpfcp-zoom-1.image)

所以描述一个过程：DOM解析（此时还是HTML）CSS还在下载，呀中途遇到JS那行，DOM说：你先来吧于是乎JS开始行动对DOM进行了一番操作，此刻CSS下载完成了就开始CSS解析了，CSS一看到JS在行动，说了句，老哥你辛苦了停下歇歇我替你工作会，那感情好，DOM和JS就在一旁看着CSS解析，CSS一解析完成为了CSSOM，对JS说你可以继续啦，于是JS开始行动把有对CSS样式操作的有对DOM操作的一块都完成了，任务结束后DOM（此时还是HTML）就继续解析成DOM，CSSOM就等待DOM解析，完成之后DOM和CSSOM合作化身为Render Tree继而呈现到浏览器的页面上。题外：如果没有JS的话，并且DOM解析比CSS快，那DOM树就不能渲染了它得等CSS解析完才能继续




