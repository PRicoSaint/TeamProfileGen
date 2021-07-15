const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    it("should create a new Engineer named Chris", () => {
        const obj = new Engineer("Chris", 1234, "chris@gmail.com", "chrisrocks")

        expect(obj instanceof Engineer).toEqual(true);
    });
    it("The new Engineer should have a role of Engineer", () => {
        const obj = new Engineer("Chris", 1234, "chris@gmail.com")

        expect(obj.getRole()).toBe("👓 Engineer");
    });
    it("The new Engineer should have name of Chris", () => {
        const obj = new Engineer("Chris", 1234, "chris@gmail.com")

        expect(obj.getName()).toBe("Chris");
    });
    it("The new Engineer should have id of 1234", () => {
        const obj = new Engineer("Chris", 1234, "chris@gmail.com")

        expect(obj.getId()).toEqual(1234);
    });
    it("The new Engineer should have email with name@gmail.com", () => {
        const obj = new Engineer("Chris", 1234, "chris@gmail.com")

        expect(obj.getEmail()).toBe("chris@gmail.com");
    });




});