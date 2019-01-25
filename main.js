// CLASSES USING PROTOTYPE
function User(name,age) {
	this.name = name;
	this.age = age;
}

User.prototype.sayHi = function() {
	console.log(this.name);
}

User.prototype.getAge = function () {
	console.log(this.age);
}


let user = new User("John",58);
user.sayHi();
user.getAge();

// USING CLASS SYNTAX
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	getName() {
		console.log(this.name)
	}

	getAge() {
		console.log(this.age)
	}

	sayHi() {
		console.log(this.name)
	}
}

let Matt = new Person("Matt Kelly", 38)
Matt.sayHi()

Matt.getAge()