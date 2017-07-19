// 객체기반 데커레이터 패턴

(function () {
    function Computer(name) {
        this.name = name;
        this.price = 0;
        this.parts = [];
    }
    Computer.prototype = {
        showPrice: function () {
            console.log(this.name + " costs $" + this.price);
        },
        showParts: function () {
            var partString = "- Parts information\n",
                length = this.parts.length,
                i;
            for (i = 0 ; i < length ; i++) {
                partString += this.parts[i].name + ": $" + this.parts[i].price + "\n";
            }
            console.log(partString + "\n- Total: $" + this.price);
        },
        decorate: function (part) {
            this.price += part.price;
            this.parts.push(part);
        }
    };
    function ComputerDecorator() {
        this.decorateParts = {};
    }
    ComputerDecorator.prototype.decorateComputer = function (computer, partName) {
        if (this.decorateParts.hasOwnProperty(partName)) {
            computer.decorate(this.decorateParts[partName]);
            console.log("Decorating " + computer.name + " with " + partName);
        }
        return computer;
    };
    ComputerDecorator.prototype.addDecoratePart = function (partName, price) {
        this.decorateParts[partName] = {
            name: partName,
            price: price
        };
    };
    var computerDecorator = new ComputerDecorator();
    computerDecorator.addDecoratePart("CPU", 200);
    computerDecorator.addDecoratePart("8GB memory", 100);
    computerDecorator.addDecoratePart("4GB memory", 50);
    console.log("1. Home computer");
    var homeComputer = new Computer("Home computer");
    homeComputer = computerDecorator.decorateComputer(homeComputer, "CPU");
    homeComputer = computerDecorator.decorateComputer(homeComputer, "4GB memory");
    homeComputer.showPrice();
    homeComputer.showParts();
    console.log("\n2. Work computer");
    var workComputer = new Computer("Work computer");
    workComputer = computerDecorator.decorateComputer(workComputer, "CPU");
    workComputer = computerDecorator.decorateComputer(workComputer, "8GB memory");
    homeComputer.showPrice();
    workComputer.showParts();
}());
