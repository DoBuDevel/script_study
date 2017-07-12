function Person(name, blog) {
    this.name = name;
    this.blog = blog;
};
Person.prototype.getName = function () {
    return this.name;
};
Person.prototype.getBlog = function () {
    return this.blog;
};
var unikys = new Person("unikys", "unikys.tistory.com"),
    prop;
for(prop in unikys) {
    console.log("unikys[" + prop + "] = " + unikys[prop]);
}
// Using hasOwnProperty function 객체의 직속 속성만 출력하는 예
for(prop in unikys) {
    if (unikys.hasOwnProperty(prop)) {
        console.log("unikys[" + prop + "] = " + unikys[prop]);
    }
}
