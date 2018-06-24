require('./style.css')


const $ = require('jquery')
const moment = require('moment')

// const Person = require('./Person')

import Person from './Person'

// class Person {
//     constructor() {
//         this.name = 'Walter'
//         this.age = 18
//     }
//     sayHi() {
//         console.log(this.name + this.age)
//     }
// }

// console.log(Person)

// console.log(Object.prototype.toString.call(Person))

const person1 = new Person()
person1.sayHi()
person1.myHabit()

console.log('es8'.padStart(6, 'woof'))

let array = [1,2,3,4]

let array2 = [5,6,7,8]

let get = [array2, ...array]

let get2 = [...array2, ...array]

console.log(get)
console.log(get2)

console.log(get2.includes(2))

// includes