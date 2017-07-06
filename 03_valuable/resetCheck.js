
// 선언여부와 초기화 안한 경우의 검사 스크립트는 같다. 그러므로 변수에 대한 선언을 해주는 것이 권장사항이다.
console.log("선언을 안한 경우 검사" + (typeof notExists === "undefined"));
var notInit = null;
console.log("초기화를 안한 경우 검사" + (typeof notInit === "undefined"));
