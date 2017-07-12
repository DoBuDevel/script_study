// 호환성 문제를 간단히 해결하는 방법

(function () {
    if (!Object.create) {
        Object.create = (function () {
            function F() {}
            return function (o) {
                F.prototype = o;
                return new F();
            }
        }());
    }
}());
