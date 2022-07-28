# ES6
## let const

1.  在let 出现之前typeof不会出现错误
1.  块级作用域 因为ES5只有全局作用域和函数作用域，没有块级作用域，导致不能在块级作用域里声明函数，非法，但是浏览器为了兼容以前的代码支持在块级作用域里声明函数，实际都能运行不会报错
1.  ES5函数声明重复导致后一个覆盖前一个 而ES6不同作用域声明的函数不会覆盖，各自为政
1.  ES6的块级作用域必须要有大括号否则没有效果，JS引擎就认为不存在块级作用域
1.  严格模式下， ES6，函数只能声明**在当前作用域的顶层（Window）** 不能声明在块级作用域
1.  const 保证的是变量指向的那个内存地址不变，所以对于复杂数据类型，它所指向的数据结构是不是可变的就完全不能控制，**const 定义的变量不可变 似乎不那么正确**
1.  ES5只有两种声明变量的办法，var和function ES6新增了4种，let var const **import class**
1.  获取到顶层对象的方法

## 结构赋值

1.  右侧必须是可迭代对象 不然语句会报错 数值和布尔值会先转成对象 null和undefined不行无法转
1.  （Generator函数）fibs也可以
1.  可以有默认值 只有当右侧对应的那个值严格为undefined才会生效
1.  默认值还可以是表达式，不过只有在被实际用到的时候才会取到值
1.  默认值还可以引用解构赋值的其他变量，前提是该变量已经声明
1.  分**数组和对象**的解构赋值
1.  数组是按顺序取值，对象是按属性名来分配，失败变量的值为undefined
1.  解构赋值的用途！！const { log} console.log 之后就可以通过log直接控制台输出 很方便有没有！
1.  嵌套的对象解构赋值会出现报错
1.  解构赋值可以取到基础的属性 setPrototypeOf
1.  对象的解构也支持对象
1.  将一个已经声明的变量用于解构赋值，要将其用（）括起来
1.  左侧可以不放置任何变量 古怪没有意义但合法
1.  可以对数组进行对象的解构赋值 就是右边是数组 左边是对象 属性对象数组下标值 另外延申属性名表达式
1.  **字符串**也可解构赋值 length属性有
1.  函数的参数也可以解构赋值
1.  尽量不要使用圆括号 解析起来不容易分可以使用圆括号的情况和不能的情况 注意遇到的时候记录
1.  解构赋值的用途！！交换变量的值-将函数返回的数组（或对象）取出来-函数参数的定义-提取JSON数据-函数参数默认值-遍历Map解构-加载模块指定输入哪些方法

## 字符串的扩展

1.  为字符串添加了遍历器的接口使得它可以通过for of循环 可以正确打印出中文字
1.  ‘中’=== '\u4e3d'
1.  改变了JSON.stringify()
1.  模板字符串 还可以调用函数
1.  标签模板 国际化处理

## 字符串新增方法

1.  String.fromCodePoint() 不知道 识别码点 大于0xFFFF的字符 返回字（中文字）
1.  String.raw() 用于模板字符串的处理
1.  includes startsWith endsWith
1.  repeat 'x'.repeat(3) 'xxx'
1.  补全 padStart() padEnd() 两个参数 第一个总长度 填补的部分
1.  trimStart（） trimEnd（）消除空格前后
1.  matchAll() replaceAll()
1.  at（）

## 正则的扩展

## 数值的扩展

## 函数的扩展

1.  ES5之前为函数参数指定默认值很不方便 只能通过判断 而ES6可以为函数的参数设置默认值
1.  与解构赋值默认值结合使用
1.  rest参数
1.  name 属性 返回函数的名称 对应不同的情况 匿名函数 bind函数 构造函数
1.  箭头函数
1.  尾调用优化 只在严格模式下开启
1.  函数参数的尾逗号 可以加
1.  catch的参数可以省略了

## 数组的扩展

1.  扩展运算符 用的少 求一个数组中的最大值 Math.max(...[1,2,3,....,1000]) - const s1=[1,2] const s2=[...s1]- 合并数组 -与解构赋值结合 -
1.  Array.from 将对象转成数组
1.  Array.of 将一组数值转成数组
1.  copyWithin 对数组的某一段赋值 再粘贴覆盖到该数组的某一段
1.  find findIndex 找出符合条件的成员 前者没找到返回undefined 后者没找到返回-1
1.  fill 填充数组
1.  entries keys values 键值对 键名 键值
1.  includes 是否包含 返回布尔值
1.  flat flatMap
1.  at
1.  数组的空位
1.  Array.prototype.sort

## 对象的扩展

1.  属性的简洁表示法

```
const foo = 'bar'
const bar = {foo}
baz
// =
const baz = {foo: foo}
```

```
function f(x,y) {
  return {x,y}
}
// =
function f(x,y) {
  return {x:x,y:y}
}
```

```
const o = {
  method() {
    return "Hello!";
  }
};
// =
const o = {
  method: function() {
    return "Hello!";
  }
};
```

属性的赋值器（setter）和取值器（getter），事实上也是采用这种写法。

简洁写法在打印对象时也很有用。

注意，简写的对象方法不能用作构造函数，会报错。

```
const obj = {
  f() {
    this.foo = 'bar'
  }
};
new obj.f() // 报错
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/895c4ac580fd40d8817063242b3264f6~tplv-k3u1fbpfcp-zoom-1.image)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/148126e456bf4fa1b795b19fb5308eab~tplv-k3u1fbpfcp-zoom-1.image)

***

2.  属性名表达式

-   通过点属性
-   通过数组【属性】该方式还可以定义方法名

`注意：属性名表达式和简洁表示法不能同时使用，会报错`

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e1038056156b40d2963c35240d928c05~tplv-k3u1fbpfcp-zoom-1.image)

`再次注意：属性名表达式如果是一个对象默认转成【object Object】`

***

3.  方法的name属性

`用于获取函数的名称`

两种特殊情况

-   构造函数创造的函数的name返回"anonymous"
-   bind方法创造的函数name返回"bound doSomething"
-   Symbol创造的函数返回这个Symbol值的描述

***

4.  属性的可枚举性和遍历

对象的每个属性都有一个描述对象，用来控制属性的行为，Object.getOwnPropertyDescriptor（）获取该属性的描述对象

`‘可枚举’设计最初的目的：让某些属性可以规避掉for...in操作，不然所有的内部属性和方法都会被遍历到`

四个操作会忽略enumerable为false的属性

-   for...in
-   Object.keys()
-   JSON.stringify()
-   Object.assign() `ES6新增`

`建议：尽量不要使用for...in而要用Object.keys()代替`

遍历方法

-   for...in
-   Object.keys(obj)
-   Object.getOwnPropertyNames(obj)
-   Object.getOwnPropertySymbols(obj)
-   Reflect.ownkeys(obj)

***

5.  super关键字

写在对象的方法里的 可以引用当前对象的原型对象

`这个‘对象方法里’很讲究，对象方法必须要是简写，定义的是对象的方法，这样才能被JS引擎所确认`

```
const proto = {
  x: 'hello',
  foo() {
    console.log(this.x);
  },
};

const obj = {
  x: 'world',
  foo() {
    super.foo();
  }
}

Object.setPrototypeOf(obj, proto);

obj.foo() // "world" 
//super.foo指向原型对象proto的foo方法，但是绑定的this却还是当前对象obj，因此输出的就是world
```

***

6.  对象的扩展运算符

对一个对象进行解构 null undefined不行

`作用：扩展某个函数的参数，引入其他操作 、拷贝、合并两个对象let ab = { ...a, ...b };`

`不能复制继承自原型对象的属性`

`只会返回参数对象自身的，可枚举的属性`

完整克隆对象还拷贝对象原型的属性：

```
// 写法一
const clone1 = {
  __proto__: Object.getPrototypeOf(obj),
  ...obj
};

// 写法二
const clone2 = Object.assign(
  Object.create(Object.getPrototypeOf(obj)),
  obj
);

// 写法三
const clone3 = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
)
```

## 对象新增的方法

1.  Object.is()
1.  Object.assign()
1.  Object.getOwnPropertyDescriptors()
1.  __proto__,Object.setPeopertyOf(),Object.getPropertyOf()
1.  Objcet.keys()
1.  Objcet.fromEntries()

## 运算符的扩展

1.  **指数运算符

**

**=

***

2.  链判断运算符

`const firstName = message?.body?.user?.firstName || 'default';`

```
a?.b
// 等同于
a == null ? undefined : a.b

a?.[x]
// 等同于
a == null ? undefined : a[x]

a?.b()
// 等同于
a == null ? undefined : a.b()

a?.()
// 等同于
a == null ? undefined : a()
```

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b456781d93e04043af57b16e96b88fc4~tplv-k3u1fbpfcp-zoom-1.image)

另外还有一些错误的链运算符使用方式

***

3.  Null判断运算符

`目的：就是跟链判断运算符?.配合使用，为null或undefined的值设置默认值。`

`这个运算符很适合判断函数参数是否赋值。`

`如果多个逻辑运算符一起使用，必须用括号表明优先级，否则会报错。`

```
(lhs && middle) ?? rhs;
lhs && (middle ?? rhs);

(lhs ?? middle) && rhs;
lhs ?? (middle && rhs);

(lhs || middle) ?? rhs;
lhs || (middle ?? rhs);

(lhs ?? middle) || rhs;
lhs ?? (middle || rhs);
```

4.  逻辑赋值运算符

```
// 或赋值运算符
x ||= y
// 等同于
x || (x = y)

// 与赋值运算符
x &&= y
// 等同于
x && (x = y)

// Null 赋值运算符
x ??= y
// 等同于
x ?? (x = y)
```

`用途是，为变量或属性设置默认值。`

```
// 老的写法
user.id = user.id || 1;

// 新的写法
user.id ||= 1;
```

## Symbol

1.  概述

\


2.  [Symbol.prototype.description](https://es6.ruanyifeng.com/##docs/symbol##Symbol.prototype.description)
2.  [作为属性名的 Symbol](https://es6.ruanyifeng.com/##docs/symbol##%E4%BD%9C%E4%B8%BA%E5%B1%9E%E6%80%A7%E5%90%8D%E7%9A%84%20Symbol)
2.  [实例：消除魔术字符串](https://es6.ruanyifeng.com/##docs/symbol##%E5%AE%9E%E4%BE%8B%EF%BC%9A%E6%B6%88%E9%99%A4%E9%AD%94%E6%9C%AF%E5%AD%97%E7%AC%A6%E4%B8%B2)
2.  [属性名的遍历](https://es6.ruanyifeng.com/##docs/symbol##%E5%B1%9E%E6%80%A7%E5%90%8D%E7%9A%84%E9%81%8D%E5%8E%86)
2.  [Symbol.for()，Symbol.keyFor()](https://es6.ruanyifeng.com/##docs/symbol##Symbol.for()%EF%BC%8CSymbol.keyFor())
2.  [实例：模块的 Singleton 模式](https://es6.ruanyifeng.com/##docs/symbol##%E5%AE%9E%E4%BE%8B%EF%BC%9A%E6%A8%A1%E5%9D%97%E7%9A%84%20Singleton%20%E6%A8%A1%E5%BC%8F)
2.  [内置的 Symbol 值](https://es6.ruanyifeng.com/##docs/symbol##%E5%86%85%E7%BD%AE%E7%9A%84%20Symbol%20%E5%80%BC)

## Set和Map数据结构

1.  [Set](https://es6.ruanyifeng.com/##docs/set-map##Set)
1.  [WeakSet](https://es6.ruanyifeng.com/##docs/set-map##WeakSet)
1.  [Map](https://es6.ruanyifeng.com/##docs/set-map##Map)
1.  [WeakMap](https://es6.ruanyifeng.com/##docs/set-map##WeakMap)

WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。

`WeakSet 的成员只能是对象，而不能是其他类型的值`

`WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用`

5.  [WeakRef](https://es6.ruanyifeng.com/##docs/set-map##WeakRef)
5.  [FinalizationRegistry](https://es6.ruanyifeng.com/##docs/set-map##FinalizationRegistry)

## Proxy

1.  [概述](https://es6.ruanyifeng.com/##docs/proxy##%E6%A6%82%E8%BF%B0)
1.  [Proxy 实例的方法](https://es6.ruanyifeng.com/##docs/proxy##Proxy%20%E5%AE%9E%E4%BE%8B%E7%9A%84%E6%96%B9%E6%B3%95)
1.  [Proxy.revocable()](https://es6.ruanyifeng.com/##docs/proxy##Proxy.revocable())
1.  [this 问题](https://es6.ruanyifeng.com/##docs/proxy##this%20%E9%97%AE%E9%A2%98)
1.  [实例：Web 服务的客户端](https://es6.ruanyifeng.com/##docs/proxy##%E5%AE%9E%E4%BE%8B%EF%BC%9AWeb%20%E6%9C%8D%E5%8A%A1%E7%9A%84%E5%AE%A2%E6%88%B7%E7%AB%AF)

## Reflect

## Promise对象

## Iterator和for...of循环

## Generator函数的语法

## Generator函数的异步应用

## Async函数

## Class函数/Class的继承

## Module的加载实现

## 编程风格/读懂规格

## 异步遍历器

## Weakmap
