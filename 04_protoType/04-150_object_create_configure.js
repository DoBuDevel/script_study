
// create  함수는 수정가능한 속성으로 초기화 할 수 있음.
function Person(name) {
    this.name = name;
}
Person.prototype = {
    yell: function () {
        console.log("My name is " + this.name);
    }
};
// 이렇게 가능
var unikys = Object.create(Person.prototype, {
    name : {
        value: "Unikys",    // 설정할 속성의 값
        configurable: true, // 속성을 지워나 value 속성 이외의 설정 속성을 바꿀지 여부
        enumerable: true,   // for-in 루프에서 해당 속성도 참조할지 여부
        writable: true      // 속성의 값을 설정 가능 여부
        // get, set 도있음
    }
});
unikys.yell(); // === "My name is Unikys"
unikys.name = "Suniky";
unikys.yell(); // === ?
