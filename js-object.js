// 工厂模式
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.log(o.name)
    };
    return o;
}

var person1 = createPerson("shaonian", 11, "work")

// 构造函数
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.log(this.name)
    }
}

var person2 = new Person("gx2", 18, "web")
var person3 = new Person("gx3", 18, "web")
console.log(person2 instanceof Object)//true
console.log(person2 instanceof Person)//true

console.log(person2.sayName == person3.sayName)//false

//改进：没有了封装性
function sayName() {
        console.log(this.name)
}
function Person1(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}

var person4 = new Person1("gx4", 18, "web")
var person5 = new Person1("gx5", 18, "web")
console.log(person4.sayName == person5.sayName)//true

// 原型模式 ： prototype
// 实例属性，原型（静态）属性
var person6 = new Person1();
console.log("prototype:")
console.log(Person1.prototype.constructor == Person1)

// in 无法区分属性在实例还是在原型上
function PersonPrototype() {

}

PersonPrototype.prototype = {
    name : "Shaonian",
    age : "23",
    job : "web",
    sayName: function() {
        console.log(name);
    }
}
var friend = new PersonPrototype();
