const Employee = require("../src/employees/Employees");

describe("Employee Test", () => {

test("getName() will return the name property", () => {

    // Arrange -- prepare the env

    const name = 'Justin';

    const dummy = new Employee (1, 'justin@awesome.com', name);

    // act
    const result = dummy.getName();

    // assert
    expect(result).toStrictEqual(name);


});

})