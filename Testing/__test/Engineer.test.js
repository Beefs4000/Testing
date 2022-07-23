const engineer = require("../src/employees/Engineer");

describe("Engineer Test", () => {

test("getGithub() will return the gitHub property", () => {

    // Arrange -- prepare the env

    const gitHub = 'github.com/Beefs4000/';

    const dummy = new engineer (1, 'justin@awesome.com', 'Justin', gitHub);

    // act
    const result = dummy.getGithub();

    // assert
    expect(result).toStrictEqual(gitHub);


});
})