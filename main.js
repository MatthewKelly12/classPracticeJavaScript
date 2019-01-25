// CLASSES USING PROTOTYPE
function User(name) {
	this.name = name;
}

User.prototype.sayHi = function() {
	alert(this.name);
}

let user = new User("John");
user.sayHi();

// USING CLASS SYNTAX
