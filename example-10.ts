// Here I have defined a class with type script. 
// Take a look at how the properties are typed. 

// https://www.typescriptlang.org/docs/handbook/2/classes.html#handbook-content

// Complete the Course class below. 

class Person {
	name: string
	age: number

	constructor(name, age) {
		this.name = name 
		this.age = age
	}

	describe(): string {
		return `${this.name} is ${this.age}`
	}
}

const joe = new Person('Joe', 33)

// Define a Course. A Course a title: string and a units: number

class Course {
	title: string
	units: number

	constructor(title, units) {
		this.title = title
		this.units = units
	}
}

// Define a Student class. Student extends Person. A Student 
// has an array of Courses and a cohort which is: junior or senior

// Add enroll method that takes a Course as parameter and adds 
// this to the course array

class Student extends Person {
	courses: Array<Course>
	cohort: string

	constructor(name, age, cohort = 'junior') {
		super(name, age)
		this.courses = []
		this.cohort = cohort
	}

	enroll(course: Course) {
		this.courses.push(course)
	}
}



export default Person
export {
	Course, 
	Student
}



