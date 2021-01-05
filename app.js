// Using Classes
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName,
    this.lastName = lastName
    this.dob = new Date(dob)
  }

  greeting() {
    return `Good afternoon ${this.firstName} ${this.lastName}`
  }

  calculateAge(date) {
    const year = new Date().getFullYear()
    console.log(year)
    return year - date
  }
}

const jeff = new Person('Jeff', 'Scott', '11-8-1984');

console.log(jeff)
console.log(jeff.greeting())
console.log(jeff.calculateAge(1984))