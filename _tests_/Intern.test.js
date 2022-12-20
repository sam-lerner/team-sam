const Intern = require("../lib/Intern")

test('school test', () => {
    const school = "MIT";
    const n = new Intern("Sam", 6, 'info@test.com', school);
    expect(n.school).toBe(school);
});
test('getSchool test', () => {
    const getSchool = "MIT";
    const n = new Intern("Sam", 6, 'info@test.com', getSchool);
    expect(n.getSchool()).toBe(getSchool);
});

test('Create an instance of an intern', () => {
    const title = new Intern();
    expect(typeof (title)).toBe('object')
})