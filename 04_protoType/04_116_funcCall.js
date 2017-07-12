// 일반 함수 호출
function say(st) {
  alert(st);
}
say("normal Call");

// 멤버 함수 호출
var dobu = {
  say : function (st){
    alert(st);
  }
}

dobu.say("member Call");

// call() apply()
say.call(undefined, "Hello world");
say.apply(undefined, ["Hello world"]);
