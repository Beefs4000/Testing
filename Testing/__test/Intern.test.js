const Intern = require("../src/employees/Intern");

describe("Intern Test", () => {

test("getSchool() will return the school property", () => {

    // Arrange -- prepare the env

    const school = 'Phoenix';

    const dummy = new Intern (1, 'justin@awesome.com', 'Justin', school);

    // act
    const result = dummy.getSchool();

    // assert
    expect(result).toStrictEqual(school);


});
})