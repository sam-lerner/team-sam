const Engineer = require("../lib/Engineer");

test('Github', () => {
    const github = 'sam-lerner';
    const n = new Engineer("Sam", 6, 'info@test.com', github);
    expect(n.github).toBe(github);
});
test('getGithub test', () => {
    const getGithub = "sam-lerner";
    const n = new Engineer("Sam", 6, 'info@test.com', getGithub);
    expect(n.getGithub()).toBe(getGithub);
});

test('Create an instance of an engineer', () => {
    const title = new Engineer("Sam", 6, 'info@test.com', 'sam-lerner');
    expect(typeof (title)).toBe('object')
})