// 로그 기록을 위한 래퍼 예 디버깅이나 사용자의 행동 패턴 분석, 또는 라이브러리의 활용도를
// 통계적으로 분석할 때 사용 할 수 있다.
(function () {
    var car = {
        beep: function beep() {
            alert("BEEP");
        },
        brake: function brake() {
            alert("STOP!");
        },
        accelerator: function accelerator() {
            alert("GO"); }
        };
    function wrap(func, wrapper) {
        return function() {
            var args = [func].concat(Array.prototype.slice.call(arguments));
            return wrapper.apply(this, args);
        };
    }
    function wrapObject(obj, wrapper) {
        var prop;
        for(prop in obj) {
            if (obj.hasOwnProperty(prop) && typeof obj[prop] === "function") {
                obj[prop] = wrap(obj[prop], wrapper);
            }
        }
    }
    wrapObject(car, function (func) {
        console.log(func.name + " has been invoked");
        func.apply(this, Array.prototype.slice(arguments, 1));
    });
    car.accelerator();
    car.beep();
    car.brake();
}());
