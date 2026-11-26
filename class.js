class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduction() {
        console.log(`Bonsoir ${this.name}, tu as ${this.age}ans`);
    }
}
let person1 = new Person("theo", "18");
person1.introduction();
