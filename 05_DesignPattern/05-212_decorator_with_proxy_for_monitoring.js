// 데커레이터 패턴은 다양한 방법으로 구현하고 응용 할 수 있다. 데커레이터 패턴의 장점은
// 한 번 체계를 만들어 두면  허용되는 범위 안에서는 확장하고 응용하는 것이 매우 편리하다는
// 점이다. 하지만 첫 번째 체계를 만드는 것이 난해하고 가능한 버무이를 결정하고 난 다음
// 특정한 상황에 따라 조금 다르게 처리하고 싶을 때 소스를 따라가면서 수정하는 것이 다소
// 어려울 수도 있다.
(function () {
    var monitorTool,
        car,
        wrapperFunction;
    monitorTool = (function () {
        var functionSequence = [];
        return {
            decorate: function (name, func) {
                functionSequence.push({
                    name: name,
                    func: func });
            },
            monitor: function (func) {
                var length = functionSequence.length;
                for (i = 0 ; i < length ; i++) {
                    functionSequence[i].func.apply(this, arguments);
                }
            }
        };
    }());
    monitorTool.decorate("before", function (func) {
        console.log(func.name + " function has started at " + Date.now());
    });
    monitorTool.decorate("decorated", function (func) {
        func.apply(this, Array.prototype.slice(arguments, 1));
    });
    monitorTool.decorate("after", function (func) {
        console.log(func.name + " function has finished at " + Date.now());
    });
    wrapperFunction = monitorTool.monitor;
    car = {
        beep: function beep() {
            alert("BEEP"); },
        brake: function brake() {
            alert("STOP!");
        },
        accelerator: function accelerator() {
            alert("GO");
        }
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
    wrapObject(car, wrapperFunction);
    console.log("A. car.accelerator() monitor");
    car.accelerator();
    console.log("\nB. car.beep() monitor");
    car.beep();
    console.log("\nC. car.brake() monitor");
    car.brake();
}());
