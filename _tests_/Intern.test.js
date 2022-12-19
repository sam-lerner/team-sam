const Intern = require("../lib/Intern")


test ('Create an instance of an intern',() => {
const title = new Intern ();
expect(typeof(title)).toBe('object')
})