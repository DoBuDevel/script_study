var getXHR = (function () {
    var xhr;
    if (window.XMLHttpRequest) {
        return function () {
            return new XMLHttpRequest();
        }
    }
    try {
        xhr = new ActiveXObject("MSXML2.XMLHTTP.6.0");
        return function () {
            return new new ActiveXObject("MSXML2.XMLHTTP.6.0");
        }
    } catch (e) {
        try {
            xhr = new ActiveXObject("MSXML2.XMLHTTP.3.0");
            return function () {
                return new ActiveXObject("MSXML2.XMLHTTP.3.0");
            }
        } catch (e) {
            alert("This browser does not support XMLHttpRequest")
        }
    }
}());
