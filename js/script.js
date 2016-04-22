//Make Var Number = html id num1
//Make Var Range = html id num2

//add listener to that html id num 1 contents - if change run update
//add listener to that html id num2 contents - if change run 2

var number = document.getElementById('num1');
var range = document.getElementById('num2');

number.addEventListener("change", update);
range.addEventListener("change", update2);

function update() {
range.value = number.value  //so if text num changes - make range = that number
}

function update2() {
number.value = range.value  //so if range changes - make number = that range
}

// # 5 Fibonacci Number
var input = document.getElementById('fab');
input.addEventListener("change", grabNum);

//Could do checks here OR just put var n = input.value and go right into var n = pass (all 1 function)
function grabNum() {   //Why sometimes put (event)?
    var pass = input.value

    runFab(pass);
    // console.log("any?", runfab );
}

function runFab(pass) {  //coming in, name within () can be called anything, just next line must match
  var n = pass
    console.log("num", n );

  var answer = document.getElementById('ans');
  var a = 0, b = 1, f = 1;
  for(i = 2; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
  }

        answer.innerHTML = "You Fibonacci Number is " + f;


  // return f;
  console.log("ans", f );
}

