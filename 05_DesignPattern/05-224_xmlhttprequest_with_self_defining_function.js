// self-define- function 패턴
//  자바스크립트의 변수에 함수를 쉽게 재정의 하고 덮어쓸 수 이쓴 장점에서 나온
//  디자인 패턴이다. 이 패턴은 말 그대로 자신을 다시 정의하는 함수 패턴을 말한다.
//  자주 호출되지 않거나 웹페이지 상에서 한 번도 호출 되지 않는 함수는 초기화 단계를
//  무조건 수행하는 것은 자원을 추가로 소모하게된다.
var getXHR = function () {
    var xhr;
    if (window.XMLHttpRequest) {
        getXHR = function () {
            return new XMLHttpRequest();
        };
        return new XMLHttpRequest();
    }
    try {
        xhr = new ActiveXObject("MSXML2.XMLHTTP.6.0");
        getXHR = function () {
            return new new ActiveXObject("MSXML2.XMLHTTP.6.0");
        };
        return xhr;
    } catch (e) {
        try {
            xhr = new ActiveXObject("MSXML2.XMLHTTP.3.0");
            getXHR = function () {
                return new ActiveXObject("MSXML2.XMLHTTP.3.0");
            };
            return xhr;
        } catch (e) {
            alert("This browser does not support XMLHttpRequest")
        }
    }
};
