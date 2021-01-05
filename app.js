// Using Classes
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName,
    this.lastName = lastName
    this.birthday = new Date(dob)
  }

  greeting() {
    return `Good afternoon ${this.firstName} ${this.lastName}`
  }

  // Works but is greatly flawed needs argument
  // calculateAge(date) {
  //   const year = new Date().getFullYear()
  //   console.log(year)
  //   return year - date
  // }

  // Far more effective
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime()

    const ageDate = new Date(diff)

    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  getsMarried(newLastName) {
    this.lastName = newLastName
  }
}

const jess = new Person('Jess', 'Scott', '11-8-1984');
console.log(jess)

jess.getsMarried('Bright')

console.log(jess)
console.log(jess.greeting())
console.log(jess.calculateAge())