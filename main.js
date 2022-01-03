var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.fullname = function () {
        console.log("".concat(this.firstName, " ").concat(this.lastName));
    };
    return Person;
}());
