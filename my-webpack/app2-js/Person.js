class Person {
    constructor() {
        this.name = 'Walter'
        this.age = 18
        this.habit = ['aaa', 'bbb', 'ccc', 'ddd']
    }
    sayHi() {
        console.log(this.name + this.age)
    }
    myHabit() {
        console.log(...this.habit);
    }
}

export default Person

