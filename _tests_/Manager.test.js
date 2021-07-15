const Manager = require("../lib/Manager");

describe("Manager class", () => {
    it("should create a new Manager named Michael", () => {
        const obj = new Manager("Michael", 1123, "michael@gmail.com", "Dunder")

        expect(obj instanceof Manager).toEqual(true);
    });
    it("The new Manager should have a role of Manager", () => {
        const obj = new Manager("Michael", 1123, "Michael@gmail.com")

        expect(obj.getRole()).toBe("☕ Manager");
    });
    it("The new Manager should have name of Michael", () => {
        const obj = new Manager("Michael", 1123, "Michael@gmail.com")

        expect(obj.getName()).toBe("Michael");
    });
    it("The new Manager should have id of 1123", () => {
        const obj = new Manager("Michael", 1123, "Michael@gmail.com")

        expect(obj.getId()).toEqual(1123);
    });
    it("The new Manager should have email with name@gmail.com", () => {
        const obj = new Manager("Michael", 1123, "Michael@gmail.com")

        expect(obj.getEmail()).toBe("Michael@gmail.com");
    });




});