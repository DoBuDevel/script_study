
function Person(name, blog) {
    this.name = name;
    this.blog = blog;
    this.getName = function () {
        return this.name;
    };
    this.getBlog = function () {
        return this.blog;
    };
}
var unikys = new Person("unikys", "unikys.tistory.com");
console.log(unikys.getName()); // === "unikys"
console.log(unikys.getBlog()); // === "unikys.tistory.com"

/**
 * 생성자를 사용하여 많은 객체를 중복해서 사용하려면 프로토타입이 좋고 생성자를
 * 사용해서 객체를 조금만 생성한다면 그냥 속성을 부여하는 것이 낫다.
 * 왜냐하면 프로토타입은 모든 객체가 한 객체를 공유하고 있어서 메모리 하나만 사용하지만,
 * 생성자 안에서 속성으로 부여하는 방식은 객체를 생성할 때마다 새로운 function 을
 * 생성하기 때문이다.
 *
 * 프로토 타입 체인 -단점  -- 1. 익숙하지 않다. 2. 객체탐색에 시간이 걸린다.
 */
