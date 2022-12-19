const Manager = require("../lib/Manager")


test ('Create an instance of a manager',() => {
const title = new Manager ();
expect(typeof(title)).toBe('object')
})