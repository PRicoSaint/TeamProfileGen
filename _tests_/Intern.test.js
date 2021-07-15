const Intern = require("../lib/Intern");

describe("Intern class", () => {
    it("should create a new Intern named Greg", () => {
        const obj = new Intern("Greg", 4321, "greg@gmail.com", "UPR")

        expect(obj instanceof Intern).toEqual(true);
    });
    it("The new Intern should have a role of Intern", () => {
        const obj = new Intern("Greg", 4321, "Greg@gmail.com")

        expect(obj.getRole()).toBe("🎓 Intern");
    });
    it("The new Intern should have name of Greg", () => {
        const obj = new Intern("Greg", 4321, "Greg@gmail.com")

        expect(obj.getName()).toBe("Greg");
    });
    it("The new Intern should have id of 4321", () => {
        const obj = new Intern("Greg", 4321, "Greg@gmail.com")

        expect(obj.getId()).toEqual(4321);
    });
    it("The new Intern should have email with name@gmail.com", () => {
        const obj = new Intern("Greg", 4321, "Greg@gmail.com")

        expect(obj.getEmail()).toBe("Greg@gmail.com");
    });
    it("The new Intern should have attended school - UPR", () => {
        const obj = new Intern("Greg", 4321, "greg@gmail.com", "UPR")

        expect(obj.getEmail()).toBe("greg@gmail.com");
    });




});