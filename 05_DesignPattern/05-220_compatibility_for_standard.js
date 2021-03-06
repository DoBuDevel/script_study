(function () {
    if (!Element.prototype.addEventListener) {
        if (Element.prototype.attachEvent) {
            Element.prototype.addEventListener = function (type, fn) {
                this.attachEvent("on" + type, fn);
            }
        } else {
            Element.prototype.addEventListener = function (type, fn) {
                this["on" + type] = fn;
            }
        }
    }
    if (!Element.prototype.removeEventListener) {
        if (Element.prototype.detachEvent) {
            Element.prototype.removeEventListener = function (type, fn) {
                this.detachEvent("on" + type, fn);
            }
        } else {
            Element.prototype.removeEventListener = function (type) {
                this["on" + type] = null;
            }
        }
    }
}());
