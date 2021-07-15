const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it("should create a new Employee Class with name of Steve", () => {
        const obj = new Employee("Steve", 0, "steve@gmail.com")

        expect(obj instanceof Employee).toEqual(true);
    });
    it("The new employee should have a role of employee", () => {
        const obj = new Employee("Steve", 0, "steve@gmail.com")

        expect(obj.getRole()).toBe("Employee");
    });
    it("The new employee should have name of Steve", () => {
        const obj = new Employee("Steve", 0, "steve@gmail.com")

        expect(obj.getName()).toBe("Steve");
    });
    it("The new employee should have id of 0", () => {
        const obj = new Employee("Steve", 0, "steve@gmail.com")

        expect(obj.getId()).toEqual(0);
    });
    it("The new employee should have email with name@gmail.com", () => {
        const obj = new Employee("Steve", 0, "steve@gmail.com")

        expect(obj.getEmail()).toBe("steve@gmail.com");
    });

});