# 设计模式
## 工厂模式

例子：`买车！`我们只需要告诉经理我们需要买什么样子的车，不需要知道车子怎么来的，怎么生产的。

接口 实现接口 基于一个接口不同实现怎么通过关键词进行调用 设计一个工厂 传入关键词进行if else判断执行对象的实例化 我们使用的话就直接实例化工厂 将关键词传入工厂 工厂帮助我们通过关键词实例化对应的对象 工厂就好似一个判断器和执行器 我们只需要传入我们需要实例化的对象的名字就可以

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b0bc54b535ef4b44a73659a0b3fc8eb7~tplv-k3u1fbpfcp-zoom-1.image)

## 抽象工厂模式

例子：比如`买衣服`，先要确定是男装还是女装，然后才开始挑选不同款式

相对工厂模式，它更抽象了，他在工厂的基础上又抽象了工厂，形成了抽象工厂。比如一个形状的接口和一个颜色的接口，有分别实现他们对应的对象，将这些实现接口的对象抽象为工厂，为颜色工厂和形状工厂，然后将这两个工厂抽象为一个工厂，之后为这个工厂创建一个生成器，生成器判断关键词走向哪个工厂，然后实例化该工厂，之后再根据传入的关键词去实例化对应的实现类。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/454763d70a634a1db32cd7773ef87629~tplv-k3u1fbpfcp-zoom-1.image)

## 单例模式

例子：一个班级只有一个班主任

通过静态函数共享的原则来实现的，通过静态函数来实例化对象，这样就能够共享一个对象，形成一个单例，即一个实例化对象。但是我们还是需要在静态方法里判断当前的对象是否实例化，如果实例化我们就返回当前实例化的对象，如果没有就new实例化再返回这个对象。为了更好地解决一些问题，比如线程安全，懒加载，我们又基于这些基础的单例模式上添加了一些东西，比如锁 ， static关键字。

**他人的经验之谈：** 一般情况下，不建议使用第 1 种和第 2 种懒汉方式，建议使用第 3 种饿汉方式。只有在要明确实现 lazy loading 效果时，才会使用第 5 种登记方式。如果涉及到反序列化创建对象时，可以尝试使用第 6 种枚举方式。如果有其他特殊的需求，可以考虑使用第 4 种双检锁方式。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7c58c0618cc4a02afe40f6e4fe3ccd9~tplv-k3u1fbpfcp-zoom-1.image)

## 原型模式

例子：一般是和工厂模式一起出现，暂时没有好的例子

相对之前的工厂模式，不再使用if else而是使用id与关键词对应的键值对方式存储在数据结构中，调用存储过程这个初始化静态方法，根据传入的ID进行查找，JS里可以使用map/set结构存储和查找，然后实例化相应的对象。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e8cbde18ec24db1968386fabee06878~tplv-k3u1fbpfcp-zoom-1.image)

## 代理模式

例子：nginx代理

如果代理类来实现真实类的方法执行，隐去了真实的对象，暴露的是代理对象

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/66a342ce33214a1b956dbfe069c90627~tplv-k3u1fbpfcp-zoom-1.image)

## 迭代器模式

例子：比如js中的map和set结构，它俩就是迭代器使用for...of进行循环

分别是迭代器和容器的接口，然后实现容器接口，并在其中实现迭代器的接口。迭代器记录指针index位置，然后两个方法，一个判断是否指针到头，一个返回当前指针所指位置的value。

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3efca5a9c91e450892d2898ec5b1c1d0~tplv-k3u1fbpfcp-zoom-1.image)

## 观察者模式

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19f77a4621964e298bf33ac492df44ac~tplv-k3u1fbpfcp-zoom-1.image)



![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ed8ef205f2a94c4bbb7bc9757dfe58ec~tplv-k3u1fbpfcp-zoom-1.image)


