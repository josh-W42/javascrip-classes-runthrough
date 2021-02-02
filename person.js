module.exports = class Person {
    constructor(name, isEngineer, age) {
        this.name = name;
        this.age = age;
        this.isEngineer = isEngineer;
        this.walking = false;
    }

    /**
     * Prints to the console a greeting
     */
    greet() {
        console.log(`Hi my name is, ${this.name}`);
    }

    /**
     * Prints to the console that the person is now walking
     */
    walk() {
        this.walking = true;
        console.log(`${this.name}: time for a walk.`);
    }

    /**
     * prints to the console the food the person is eatting.
     * @param {string} food - A string representing food to eat.
     */
    eat(food) {
        console.log(`${this.name}: Time to eat some ${food}.`)
    }
}