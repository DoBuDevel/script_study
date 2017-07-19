//  기존 함수와 동일하게 활용 가능한 래퍼 예
(function () {
    function wrap(func, wrapper) {
        return function() {
            var args = [func].concat(Array.prototype.slice.call(arguments));
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

    // 동일하가게 활용 가능한 예
    (function () {
        var existingFunction = wrappedFunction;
        console.log("\n3. Calling wrapped existing function");
        existingFunction("First argument", "Second argument", "Third argument");
    }());
}());
