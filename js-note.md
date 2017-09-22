

# script

```
<script src = '' type = '' language = '' ></script>
type: default 'text/javascript' 
```
1. 在解析外部javascript文件时，页面处理会暂时停止。
2. 同时引用外部和内部js代码，内部代码不会执行。
3. 依次解析```<script>```
4. 位置
    1. ```<head></head>``` 之间， 浏览器在遇到```<body>```时才开始解析。当 ```<script>``` 比较多时, 必须等到所有的```<script>```被下载,解析,执行, 才开始解析页面。呈现页面延迟，空白。
    2. ```<body></body>``` 最后之前：延迟脚本放在页面底部之前。
5. 外部引用：可维护，可缓存，适应未来。
6. ```<noscript><p>本页面需要浏览器支持(启用) JavaScript</p></noscript>```

# 基本语法
1. 驼峰命名：shaoNian, _start, $end
2. ```"use strict"```
3. ； 避免错误，放心压缩，提升性能（不加分号解释器去推测哪里插入分号）
4. 变量：未声明，未初始化　
    ```
    alter(shaonian) //未声明
    var shaoNian // 未初始化
    var shaoNian = "shaoNian";　// 局部变量，在函数退出后，销毁；若省略 var ，则为全局变量，不推荐。在严格模式下给未经声明的变量赋值会报错。
    shaonian = 12;// 可以，但不推荐（修改了值的类型）

    var message = "hi",
        found = false,
        age = 25;// 可以放到一行中写，但是这样可读性好
    ```


# 数据类型

1. ６中数据基本类型：
    * Undefined: 为了区分空指针对象和未经初始化的变量, 不能区分未经初始化和未声明的变量（typeof 都为 undefined, 约定声明的时候初始化变量便可知道未声明的变量）
    * Null： var car = null, 空对象指针（typeof car 为 object）, 如果声明的变量用于保存一个对象。初始化为 null. ```if (car != null) { // 其他的操作} alter(null == undefined)```
    * Boolean: true/false. 但其他类型值都有与其等价的值。
    * Number:  0.1+0.2 != 0.3 ; NaN:(5/0),涉及NaN的操作为NaN,NaN!=NaN->isNaN() 函数, 转换Number(), parseInt(), parseFloat()
    * String: 
    * Object: 
2. typeof 变量；操作符不是函数
3. 操作符：一元（++，--）, [~, &, |, ^, <<, >>, >>>],[!,&&, ||],[*,/,+,-],[>,<,>=,<=],[==,!=](转换), [===,!===],[a = boolean_expression ? 1:2]
         赋值操作：[+=， -=]

# 语句
1. 条件
    ```
        if () {

        }
        else if () {
        }
        else {
        
        }
    ```
2. 循环
```
do{

}while();

while() {

}

for(;;){

}

for(var a in window) {// 枚举对象的属性

}
```
3. break,continue
4. with
5. switch
```
switch(i) { // === 不会转换
    case 25: 
        ....
        break;
    case 22:
        ....
        break;
    default: 
        ....;
}

```
6. function

# 变量
基本类型（5），引用类型（Object）
1. var person = new Object() 
2. 手动释放内存： person = null;
