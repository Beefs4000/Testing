const Manager = require("../src/employees/Manager");

describe("Manager Test", () => {

test("getOfficeNumber() will return the officeNumber property", () => {

    // Arrange -- prepare the env

    const officeNumber = 555555555;

    const dummy = new Manager (1, 'justin@awesome.com', 'Justin', officeNumber);

    // act
    const result = dummy.getOfficeNumber();

    // assert
    expect(result).toStrictEqual(officeNumber);


});
})