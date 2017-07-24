//  self- defining function 패턴의 장점은 외부에서 해당 함수를 호출할 때 보이는 변경 점은
 // 없지만 내부적으로 초기화 단계를 거치고 나서 이후의 처리 프로세스를 최적화할 수 있다는 점
 //  이다. 때에 따라서는 자동으로 생성되는 클로저를 활용해서 초기화 단계에서 생성 되거나
 // 수집한 데이터를 보관하고 있을 수 있으므로 일회성 처리를 수용하기에 좋은 패턴이다.
 //  단점이라면 불필요한 클로저가 생성되고 데이터가 메모리에 계속 남아 있을 수있다.
 //  따라서 해당 변수를 한 번만 사용하고 사용 안 할 것이라면 그냥 undeefined 로 초기화
 // 하는 것이 좋다.


(function () {
    var requestAuthentication = function (information) {
        var _requestAuthentication = requestAuthentication,
            authInformation = null;
        requestAuthentication = function (information) {
            if (authInformation === null) {
                alert("Already requesting");
                return;
            } else {
                return authInformation;
            }
        }
        sendRequest(information);
        function sendRequest(information) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/auth");
            xhr.onload = function () {
                alert("Authorized!");
                authInformation = xhr.responseText;
            };
            xhr.onerror = function () {
                if (confirm("Error occurred, send again?")) {
                    sendRequest(information);
                }
            }
            xhr.send(information);
        }
    }
    requestAuthentication("name=hello&password=world");
}());
