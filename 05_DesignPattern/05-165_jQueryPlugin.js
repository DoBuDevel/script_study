//  생략
jQuery = function (selector, context){
  return new jQuery.fn.init(selector,context);
},
jQuery.fn = jQuery.prototype = {

}
// 생략
init = jQuery.fn.init = function (selector, context){

}
init.prototype - jQuery.fn;
