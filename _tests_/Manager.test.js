const Manager = require("../lib/Manager")

test('office', () => {
    const office = 9;
    const n = new Manager("Sam", 6, 'info@test.com', office);
    expect(n.office).toBe(office);
});
test('getOffice test', () => {
    const getOffice = 9;
    const n = new Manager("Sam", 6, 'info@test.com', getOffice);
    expect(n.getOffice()).toBe(getOffice);
});

test ('Create an instance of a manager',() => {
const title = new Manager ();
expect(typeof(title)).toBe('object')
})