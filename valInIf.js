// if 안에 변수를 정의하는 예
function optimizedFunc(flag){
  if(flag){
    var lot1,lot2,lot3;
    console.log("1 : "+ lessVals);
  } else {
    var lessVals;
    console.log("2 : "+ lot1);
  }
}
optimizedFunc(true);
optimizedFunc(false);

// 하나의 var 구문으로 변수를 정의하는 예  << 이게 좋음
function optimizedFunc2(flag){
  var lot1,lot2,lot3,lessVals;
  if(flag){
    console.log("1 : "+ lessVals);
  } else {
    console.log("2 : "+ lot1);
  }
}
optimizedFunc2(true);
optimizedFunc2(false);
