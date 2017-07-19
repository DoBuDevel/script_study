// 프락시 패턴을 이용한 래퍼 구현 예
(function () {
    function wrap(func, wrapper) {
        return function() {
            var args = [func].concat(Array.prototype.slice.call(arguments));  // concat 배열 합치기
            return wrapper.apply(this, args);
        };
    }
    function existingFunction() {
        console.log("Existing function is called with arguments");
        console.log(arguments);
    }
    var wrappedFunction = wrap(existingFunction, function (func) {
        console.log("Wrapper function is called with arguments");
        console.log(arguments);
        func.apply(this, Array.prototype.slice.call(arguments, 1));
    });
    console.log("1. Calling existing function");
    existingFunction("First argument", "Second argument", "Third argument");
    console.log("\n2. Calling wrapped function");
    wrappedFunction("First argument", "Second argument", "Third argument");
}());
