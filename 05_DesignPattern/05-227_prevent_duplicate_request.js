(function () {
    var requestAuthentication = function (information) {
        var _requestAuthentication = requestAuthentication;
        requestAuthentication = function (information) {
            alert("Already requesting");
        }
        sendRequest(information);
        function sendRequest(information) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/auth");
            xhr.onload = function () {
                alert("Authorized!");
                requestAuthentication = _requestAuthentication;
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
