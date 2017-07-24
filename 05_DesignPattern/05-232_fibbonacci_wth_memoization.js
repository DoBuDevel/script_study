(function () {
    function fibonacci(n) {
        if (n === 0 || n === 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
    var fibonacciMemo = (function () {
        return function (n) {
            var result = fibonacciMemo.memo[n];
            if (typeof result !== 'number') {
                result = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
                fibonacciMemo.memo[n] = result;
            }
            return result;
        };
    }());
    fibonacciMemo.memo = [0, 1];
    var testNum = 40, start, end;
    start = Date.now();
    console.log(fibonacci(testNum));
    end = Date.now();
    // number.toFixed(x) 소수점 자름
    console.log(`Elapsed time of ${((end-start)/1000).toFixed(2)} seconds for recursive fibonacci(${testNum})`);
    start = Date.now();
    console.log(fibonacciMemo(testNum));
    end = Date.now();
    console.log(`Elapsed time of ${((end-start)/1000).toFixed(2)} seconds for recursive fibonacciMemo(${testNum})`);
}());
0
