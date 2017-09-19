var Student = function() {
  "use strict";
  function Student(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  return ($traceurRuntime.createClass)(Student, {study: function() {
      alert('Actions speak louder than words!');
    }}, {});
}();
var s1 = new Student('tom', 19, '男');
s1.study();
