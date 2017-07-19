// 모듈 패턴의 간단한 예
//
// 모듈 패턴이란?
// 일반적이 자바스크립트에서는 보이지 않지만 글로벌 변수의 사용을 최소화 하기위해 쓰인다.
// 모듈단위 소스를 개발하면 각 모듈간의 의존성을 최소화하거나 의존성을 파악하기 쉽다.

// 대표적으로는 jQuery가 있다.

$.get("/api/test").done(function (result){
  var test = result;
  console.log(test);
});
