//complete this code
class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	get name(){
		return this.name;
	}
	get age(){
		return this.age;
	}
	set name(name){
		this.name = name;
	}
	set age(val){
		this.age = val;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

let t1 = new Teacher("Minakshi",20);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
