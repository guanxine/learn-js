console.log("hello,world")

function hello(params) {
    console.log(params);
    console.log(arguments.length);
    for (var key in arguments) {
        console.log(arguments[key]);
    }
}

hello("bai", "juan")

// 基本类型
var num1 = 2;
var num2 = num1;
num1 = 1;
console.log(num1 + "," + num2);

var numObj1 = new Object();
var numObj2 = numObj1;
numObj1.value = 2;
console.log(numObj1.value + "," + numObj2.value);

// 作用域变量

var color = "blue";

function changeColor(params) {
    var anotherColor = "red";
    function swapColors(params) {
        var tempColor = "black"
    }
}

// 
if (true) {
    var color = "black";
}


console.log(color);

// obj
// 1
console.info("obj----------")
var person = new Object(); // {}
person.name = "shaonian";
person.age = 29;

// 字面量, 推荐，代码少，封装数据，函数传递可选参数的
var person1 = {
    name : "shaonian",
    age : 29
}

for (var key in person) {
    if (person.hasOwnProperty(key)) {
        var element = person[key];
        console.log("person: "  + element)
    }
}

// arr 
console.info("arr----------")
var arr = new Array(1);
console.log("len :" + arr.length);
arr[0] = 1;
arr[1] = 2;
console.log("len : " + arr.length)

for (var index in arr) {
    console.log(arr[index])
}

console.log("index:" + index)

// 字面量
var arr1 = ['a','b','c','d'];

for (var index in arr1) {
    console.info(arr1[index])
}
console.log("index:" + index)

// insert

arr1[arr1.length] = 'e';
console.log("insert:" + arr1[4])

// delete
arr1.length = 4
console.log("delete:" + arr1[4])

// check arr
console.log(Array.isArray(arr1))
console.log("arr to string")
console.log(arr1.toString())
console.log(arr1.toLocaleString())
console.log(arr1)
console.log(arr1.join("|"))

var arr3 = [1,4,3,2,5];
function asc(value1, value2) {
    return value1 - value2;
}
arr3.sort();

// 迭代方法
console.log("itera")
var numbers = [1,2,3,4,5,4,3,2,1]
// 有一个不满足就退出循环
var everyResult = numbers.every(function (item, index, array) {
    for (var key in arguments) {
        if (arguments.hasOwnProperty(key)) {
            var element = arguments[key];
            console.log(key + ":" + element);
        }
    }
    console.log('item:' + item);
    return item > 2;
})
console.log(everyResult)
console.log("foreach: ")
numbers.forEach(function (item, index, array) {
    console.log("item:" + item * 2 + ", index: " + index + ",array" + array)
})

console.log(numbers)

// Date
console.info("Date")

// Rx

//Function 
// 函数是对象，函数名是指针
// 函数声明
function sum1(num1, num2) {
    return num1 + num2;
}

// 函数表达式
var sum2 = function (num1, num2) {
    return num1 + num2;
}


console.log(sum1(10,10))
var anotherSum = sum1;
console.log(sum1(10, 10))
console.log(anotherSum(10, 10))
sum1 = null;
console.log(anotherSum(10, 10))

// 函数作为参数传递。

// prototype

// apply() or call() : 扩大函数运行的作用域

console.log(sum2.toString());

// 永远不要使用 Boolean 对象

console.log( new Boolean(false) && true )
console.log( false && true )

// eval // 执行js,代码注入

eval("var msg = 'hello,world'")
console.log(msg)