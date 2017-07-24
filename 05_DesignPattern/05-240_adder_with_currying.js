// 커링 패턴(currying)
// 함수를 설계할 때 인자 전체를 넘겨서 호출할 수도 있지만, 일부 인자는 먼저 입력해두고
// 나머지만 입렵받을 수 있도록 새로운 함수를 만드는 패턴을 의미한다.
// 특히, 자바스크립ㄴ트에서는 클로저가 있어서 먼저 일부 입력된 값을 유지하고, 가지고 
// 있는것을 아주 쉽게 구현할 수 있기 때문에 자바스크립트에서 유요하게 사용할 수있는 패턴이다.

(function () {
    function sum(x, y) {
        return x + y;
    }
    var makeAdder = function (x) {
        return function (y) {
            return sum(x, y);
        };
    };
    var adderFour = makeAdder(4);
    console.log(adderFour(1)); // === 5
    console.log(adderFour(5)); // === 9
}());
