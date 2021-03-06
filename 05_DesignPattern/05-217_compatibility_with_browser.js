(function () {
    function getInternetExplorerVersion() {
        var rv = -1;
        if (navigator.appName == 'Microsoft Internet Explorer') {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (/"MSIE ([0-9]{1,}[\.0-9]{0,})"/.exec(ua) != null) {
                rv = parseFloat( RegExp.$1 );
            }
        }
        return rv;
    }
    var ieVersion = getInternetExplorerVersion(),
        addEventHandler,
        removeEventhandler;
    if (ieVersion !== -1 && ieVersion < 9) {
        addEventHandler = function (dom, type, fn) {
            dom.attachEvent( 'on'+type, function () {
                fn.call(dom, window.event);
            });
        }
        removeEventHandler = function (dom, type, fn) {
            dom.detachEvent('on'+type, fn);
        }
    } else {
        addEventHandler = function (dom, type, fn) {
            dom.addEventListener(type, fn);
        };
        removeEventHandler = function (dom, type, fn) {
            dom.removeEventListener(type, fn); };
    }
}());
