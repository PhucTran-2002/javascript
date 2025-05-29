
//Arrow Function  ham mui ten
const add = (a, b) => {
    return a + b;
  };
  
  console.log(add(3, 4));

  //
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));


//Function Declaration ham khai bao


function hiName(name) {
    console.log("Hello, " + name);
  }
  
  hiName("Phuc");

  //Function Expression  ham bieu thuc

  const sayGoodbye = function(name) {
    console.log("Goodbye, " + name);
  };
  
  sayGoodbye("Phuc");

  //dung lam Callback Function

const numbers = [1, 2, 3];

numbers.forEach(function(num) {
  console.log(num * 2);
});



// khoi tao doi tuong
function Person(name) {
    this.name = name;
  }
  
const p1 = new Person("Phuc");
console.log(p1.name);
//
const btn = document.querySelector("button");
btn.addEventListener("click", function() {
  console.log(this); 
});
