// % We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// % Lambda personnel can be broken down into three different types of `people`.
//   % %%Instructors%% - extensions of Person
//   % %%Students%% - extensions of Person
//   % %%Project Managers%% - extensions of Instructors
// % %%IMPORTANT%% - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:


//! CODE here for your Lambda Classes
class Person{
    constructor(pAttrs){
    this.name = pAttrs.name;
    this.age = pAttrs.age;
    this.location = pAttrs.location;
    }
    speak(){
        return (`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person{
    constructor(iAttrs){
    super(iAttrs)
    this.specialty = iAttrs.specialty;
    this.favLanguage = iAttrs.favLanguage;
    this.catchPhrase = iAttrs.catchPhrase;
    }

    demo(subject){
        return (`Today we learning about ${subject}`)
    }
    grade(student, subject){
        return (`${student.name} recieves a perfect score on ${subject}`)
    }
}


class Student extends Person{
constructor(sAttrs){
    super(sAttrs)
    this.previousBackground = sAttrs.previousBackground;
    this.className = sAttrs.className;
    this.favSubjects = sAttrs.favSubjects;
}

listsSubjects(){
    return this.favSubjects;
}

PRAssignment(subject){
    return (`${this.name} has submitted a PR for ${subject}`);
}

sprintChallenge(subject){
   return (`${this.name} has begun sprint challenge on ${subject}`);
}
}


class teamLead extends Instructor {
    constructor (tlAttrs){
    super (tlAttrs)
    this.gradClassName = tlAttrs.gradClassName;
    this.favInstructor = tlAttrs.favInstructor;
}

standUp(channel){
    return (`${this.name} announces to ${channel} @channel standup time!`);
}

debugsCode(student, subject){
    return (`${this.name} debugs ${student.name}'s code on ${subject}`);
}
}



const teacher = new Instructor({
    name: "Josh Knell",
    age: "unknown",
    location: "Lambda",
    specialty: "Javascript",
    favLanguage: "Javascript",
    catchPhrase: "none",
})


const educatee = new Student({
    name: "Kara",
    age: 40,
    location: "Oklahoma",
    previousBackground: "none",
    className: "WebPT11",
    favSubjects: ["HTML", "CSS", "More to Come"],
})

const tl = new teamLead({
    name: "Leigh",
    age: "unknown",
    location: "Lambda",
    specialty: "Connecting Us",
    favLanguage: "Python",
    catchPhrase: "none",
    gradClassName: "FT",
    favInstructor: "lots",
})
const subject = "Javascript";
const channel = "webpt11l_martin"

//!speak
console.log(teacher.speak());
console.log(educatee.speak());
console.log(tl.speak());

//@ Instructor Methods
console.log(teacher.demo(subject));
console.log(teacher.grade(educatee, subject));

//# Student Methods
console.log(educatee.listsSubjects());
console.log(educatee.PRAssignment(subject));
console.log(educatee.sprintChallenge(subject));

//$ TeamLead Methods
console.log(tl.standUp(channel));
console.log(tl.debugsCode(educatee, subject));