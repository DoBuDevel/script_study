// Object.create 함수를 통해서 값만 설정하면 읽기전용 코드가 된다.!
function Person(name) {
    this.name = name;
}
Person.prototype = {
    yell: function () {
        //alert("My name is " + this.name);
        console.log("My name is " + this.name);
    }
};
var unikys = Object.create(Person.prototype, {
    name: {
        value: "Unikys"
    }
});
unikys.yell(); // === "My name is Unikys"
unikys.name = "Suniky"; unikys.yell(); // === "My name is Unikys"??

// Object.create 함수를 통해서 값만 설정하면 읽기 전용 속성이 되어 값을 수정 할 수
// 없게됨, 따라서 값을 수정할 수 있게 하려면 해당 속성에 대하여 추가로 설정해주어야 한다.
