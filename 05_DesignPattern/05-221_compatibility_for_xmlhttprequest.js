function getXHR() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    try {
        return new ActiveXObject("MSXML2.XMLHTTP.6.0");
    } catch (e) {
        try {
            return new ActiveXObject("MSXML2.XMLHTTP.3.0");
        } catch (e) {
            alert("This browser does not support XMLHttpRequest."); return null;
        }
    }
}
