// 기존 함수를 백업하여 활용하는 래퍼 예 - 기존 소스를절대로 수정 할 수 없다고 판단 되거나 호출 되는
// 범위나 소스를 유추할 수 없을 때만 분별해서 사용하면 좋다.
(function () {
    function wrap(func, wrapper) {
        return function() {
            var args = [func].concat(Array.prototype.slice.call(arguments));
            return wrapper.apply(this, args);
        };
    }
    var _existingFunction = existingFunction,
        existingFunction = wrap(_existingFunction, function (func) {
            console.log("Wrapper function is called with arguments");
            console.log(arguments);
            func.apply(this, Array.prototype.slice.call(arguments, 1));
        });
    function existingFunction() {
        console.log("Existing function is called with arguments");
        console.log(arguments);
    }
    console.log("1. Calling wrapped existing function");
    existingFunction("First argument", "Second argument", "Third argument");
}());
