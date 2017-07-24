// Self-invoking constructor 패턴
// 라이브러리에서 함수를 생성해 사용 힐때 new 를 빼먹는 경우를 줄이기 위한 패턴
(function () {
    function Employee(name, manMonth) {
        if (!(this instanceof Employee)) {
            return new Employee(name, manMonth);
        }
        this.name = name;
        this.manMonth = manMonth;
    }
    var unikys = Employee("Unikys", 1),
        world = new Employee("World", 2);
    console.log(unikys);
    console.log(world);
}());
