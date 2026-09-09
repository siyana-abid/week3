   let student = {
    name: "fathima",
    age:18,
    city: "Kannur",
     state: "Kerala"
    };
console.log(student.name);
console.log(student.age);
console.log(student.city);
console.log(student.state);


document.getElementById("name").innerText =student.name;
document.getElementById("age").innerText = "Age: " + student.age;
document.getElementById("city").innerText = "City: " + student.city;
document.getElementById("state").innerText = "state: " + student.state;
document.body.style.backgroundColor = "lightpink";
// student.name = "Aisha";
// document.getElementById("name").innerText = student.name;