class Person{
    name:string;
    age:number;
    
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    getName(){

    }
}
class Student extends Person{
    rollNumber:number;
    courses:Course[]=[];
    constructor(rollNumber:number,name:string,age:number){
        super(name,age)
        this.rollNumber=rollNumber;
    }
    registerForCources(course:Course){
        this.courses.push(course);
    }
}
class Instructor extends Person{
    salary:number;
    courses:Course[]=[];
    constructor(salary:number,name:string,age:number){
        super(name,age)
        this.salary=salary;
    }
    assignCourse(course:Course){
        this.courses.push(course);
    }
}
class Course{
    id:number;
    name:string;
    students:Student[]=[];
    instructors:Instructor[]=[];
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    addStudent(student:Student){
    this.students.push(student);
    }
 setInstructor(instructor:Instructor){
this.instructors.push(instructor);
 }
}
class Department{
    name:string;
    courses:Course[]=[];
    constructor(name:string){
        this.name=name;
    }
    addCourse(course:Course){
        this.courses.push(course);
    }
}

const std1= new Student(123,"Ali",25);
const std2= new Student(456,"Hamza",23);
const course1= new Course(444,"Blockchain");
const course2= new Course(222,"AI MASTERY");
const instructor1= new Instructor(100000,"Hassan",35);
const instructor2= new Instructor(180000,"Saleem",38);
instructor1.assignCourse(course1);
instructor2.assignCourse(course2);
std1.registerForCources(course1);
std2.registerForCources(course2);
std1.registerForCources(course2);

const d1= new Department("Computer Science");
const d2= new Department("Electrical Engineering");
d1.addCourse(course1);
d1.addCourse(course2);
d2.addCourse(course1);
d2.addCourse(course2);
course1.addStudent(std1);
course1.addStudent(std2);
course1.setInstructor(instructor1)
course1.addStudent(std2);

console.log(std1.courses);
console.log(course1.students);
console.log(std2.courses);
console.log(std1.courses)
console.log(d1.courses);





