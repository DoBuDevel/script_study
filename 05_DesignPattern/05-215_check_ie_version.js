//  init-time branching 패턴 - 이라고 하긴하는데 그냥 ie 버전 판별 (으으..싫엉)
(function () {
    var IEVersion = getIEVersion();
    if (IEVersion === -1) {
        alert("Not IE");
    } else if(IEVersion < 9) {
        alert("IE 8 or lower, need to upgrade");
    } else {
        alert("IE 9 or higher");
    }
    function getIEVersion() {
        if (navigator.appName == "Microsoft Internet Explorer" && /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent) !== null) {
            return parseFloat(RegExp.$1);
        } else {
            return -1;
        }
    }
}());
