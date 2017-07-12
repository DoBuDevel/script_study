// get, set 속성은 접근자(accessor)를 설정하느 속서응로 writable은 false가 되어야하고,
// value를 설정하여 초기화 할수 없다. 이러한 접근자는 다른 속성들의 조합을 통해서 새로운 속성이
// 계산 또는 유추할 수 있을 때 편하게 사용하기 위해 활용된다.

// 위설명에 대한 예
var unikys = {};
Object.defineProperties(unikys, {
    firstName: {
        value: "Sung-ihk",
        writable: true
    },
    lastName: {
        value: "Yang",
        writable: true
    },
    fullName: {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (value) {
            var res = value.split(" ");
            if (res.length > 1) {
                this.firstName = res[0];
                this.lastName = res[1];
            } else {
                alert("Wrong format");
            }
        }
    }
});
console.log(unikys.fullName); // === "Sung-ihk Yang"
unikys.fullName = "Hello world";
console.log(unikys.firstName); // === "Hello"
console.log(unikys.lastName); // === "world"
// writable을 설정 함으로써 읽기전용을 부여해 readonly 속성으로 라이브러리 개발에 유용하다.
