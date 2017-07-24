(function () {
    Function.prototype.memoize = function () {
        var _this = this,
            memo = {};
        return function () {
            var argsString = JSON.stringify(arguments),
                returnValue;
            if (memo.hasOwnProperty(argsString)) {
                return memo[argsString];
            } else {
                returnValue = _this.apply(this, arguments);
                memo[argsString] = returnValue;
                return returnValue;
            }
        }
    };
    function fibonacci(n) {
        if (n === 0 || n === 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
    var fibonacciMemo = fibonacci.memoize();
    var testNum = 10, start, end;
    start = Date.now();
    console.log(fibonacciMemo(testNum));
    end = Date.now();
    console.log(`Elapsed time of ${((end-start)/1000).toFixed(2)} seconds for recursive fibonacciMemo(${testNum}) for the first time`);
    start = Date.now();
    console.log(fibonacciMemo(testNum));
    end = Date.now();
    console.log(`Elapsed time of ${((end-start)/1000).toFixed(2)} seconds for recursive fibonacciMemo(${testNum}) for the second time`);
}());
