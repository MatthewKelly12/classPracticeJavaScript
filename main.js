// CLASSES USING PROTOTYPE
function User(name,age) {
	// SET INITIAL PROPERTIES
	this.name = name;
	this.age = age;
}

// ADDS FUNCTION TO USER CLASS
// RETURNS STRING (NAME OF USER)
User.prototype.getName = function() {
	return (this.name);
}

// ADDS FUNCTION TO USER CLASS
// RETURNS INT (AGE OF USER)
User.prototype.getAge = function () {
	return (this.age);
}

// ADDS FUNCTION TO USER CLASS
// RETURNS STRING (NAME AND AGE OF USER)
User.prototype.getNameAndAge = function () {
	const name = this.getName()
	const age = this.getAge()

	return (`${name} is ${age} years old`)
}

// MAKE INSTANCE OF USER AND TEST METHODS
let user = new User("John",58);
console.log(user.getName());
console.log(user.getAge());
console.log(user.getNameAndAge())

// USING CLASS SYNTAX
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	getName() {
		return (this.name)
	}

	getAge() {
		return (this.age)
	}

	getNameAndAge() {
		const name = this.getName()
		const age = this.getAge();
		return (`${name} is ${age} years old`)
	}
}

let Matt = new Person("Matt Kelly", 38)

console.log(Matt.getAge())

console.log(Matt.getNameAndAge())