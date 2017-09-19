class Student{
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    study () {
        alert('Actions speak louder than words!');
    }
}
let s1 = new Student('tom', 19, '男');
s1.study();