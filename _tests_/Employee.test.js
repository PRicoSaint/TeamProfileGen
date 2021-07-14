const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it("should create a new Employee Class", () => {
        const obj = new Employee("Steve", 0, "steve@gmail.com")

        expect(obj instanceof Employee).toEqual(true);
    });





});